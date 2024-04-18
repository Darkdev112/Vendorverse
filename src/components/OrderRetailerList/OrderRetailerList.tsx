"use client"
import { useEffect, useRef, useState } from "react"
import {toast} from 'react-toastify'
import RetailerOrder from "../RetailerOrder/RetailerOrder";
import { getDistributorName ,getRetailerOrders } from "@/api/profile";
import { orderRetailerData } from "@/constants/order_data";

type SortType = "date" | "name" | "status"

const statusPriority: Record<string, number> = {
    'new': 1,
    'pending': 2,
    'completed': 3,
    'rejected': 4,
}

export default function PlaceRetailerOrder() {
    const [token, setToken] = useState<string | null>("")
    const [orders, setOrders] = useState<orderRetailerData[]>([]);
    const [sortby, setSortby] = useState<SortType>('date');
    const dateref = useRef<HTMLInputElement>(null)
    const disref = useRef<HTMLInputElement>(null)
    const statref = useRef<HTMLInputElement>(null)
    const inputref = useRef<HTMLInputElement>(null)

    const handleSort = (type: SortType) => {
        switch (type) {
            case "date":
                if (dateref.current && disref.current && statref.current) {
                    dateref.current.checked = !dateref.current.checked
                    disref.current.checked = false
                    statref.current.checked = false
                }
                break;
            case "name":
                if (dateref.current && disref.current && statref.current) {
                    dateref.current.checked = false
                    disref.current.checked = !disref.current.checked
                    statref.current.checked = false
                }
                break;
            case "status":
                if (dateref.current && disref.current && statref.current) {
                    dateref.current.checked = false
                    disref.current.checked = false
                    statref.current.checked = !statref.current.checked
                }
                break;
            default:
        }
        setSortby(type)
    }

    const handleClick = async () => {
        try {
            if(!inputref.current || inputref.current.value == ""){
                return;
            }
            const result = await getDistributorName({email : inputref.current.value}, token)
            if (result.error) {
                toast.error(`No such distributors`, {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
                return;
            }
            inputref.current.value=""
            const filteredOrders  = orders.filter((data : orderRetailerData) => {
                return !data.from.localeCompare(result.id)
            })
            setOrders(filteredOrders)
        } catch (error) {
            console.log(error);
            toast.error("Filtering failed", {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    useEffect(() => {
        const sortedOrders = [...orders]
        sortedOrders.sort((a, b) => {
            if (sortby === 'date') {
                const aDate = new Date(a.createdAt)
                const bDate = new Date(b.createdAt)
                return aDate.getTime() - bDate.getTime()
            }
            else if (sortby === 'name') {
                return a.product_name.localeCompare(b.product_name)
            }
            else {
                return statusPriority[a.status] - statusPriority[b.status]
            }
        })
        setOrders(sortedOrders)
    }, [sortby])

    useEffect(() => {
        if (typeof window !== "undefined") {
            setToken(localStorage.getItem('token'))
        }
    }, [typeof window])

    useEffect(() => {
        const getOrders = async() => {
            if (typeof window !== "undefined") {
                const  result = await getRetailerOrders(localStorage.getItem('token'))
                setOrders(result.orders)
            }
        }
        getOrders()
    },[])

    return (
        <div className="h-full flex flex-col">
            <div className="w-full flex flex-row items-center lg:gap-8 md:gap-4 sm:gap-2 mb-2">
                <p className="font-rokkitt lg:text-2xl sm:text-lg text-[#DDD0C8]">Sort By : </p>
                <div className="font-rokkitt lg:text-xl sm:text-base text-[#DDD0C8] font-bold tracking-wider flex flex-row items-center">
                    <input type="radio" name="Date" className="accent-[#DDD0C8]" ref={dateref} defaultChecked />
                    <label htmlFor="Date" className="ml-2 hover:cursor-pointer" onClick={() => { handleSort('date') }}>Date</label>
                </div>
                <div className="font-rokkitt lg:text-xl md:text-base text-[#DDD0C8] font-bold tracking-wider flex flex-row items-center">
                    <input type="radio" name="Name" className="accent-[#DDD0C8]" ref={disref} />
                    <label htmlFor="Name" className="ml-2 hover:cursor-pointer" onClick={() => { handleSort('name') }}>Name</label>
                </div>
                <div className="font-rokkitt lg:text-xl md:text-base text-[#DDD0C8] font-bold tracking-wider flex flex-row items-center">
                    <input type="radio" name="Status" className="accent-[#DDD0C8]" ref={statref} />
                    <label htmlFor="Status" className="ml-2 hover:cursor-pointer" onClick={() => { handleSort('status') }}>Status</label>
                </div>
            </div>
            <div className="flex flex-row gap-2 mb-8">
                <input className='w-1/2 md:h-[2.5rem] md:rounded-[0.5rem] sm:h-[2rem] sm:rounded-[0.3rem] focus:outline-none focus:ring focus:ring-[#98AFC7] px-[1rem] text-[#323232] placeholder:text-[#DDD0C8] placeholder:font-sans placeholder:font-normal placeholder:text-lg placeholder:tracking-normal font-rokkitt font-bold tracking-wider text-xl' placeholder='Filter by Distributors' ref={inputref}/>
                <button className='bg-[#DDD0C8] border border-gray-100 shadow-sm text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8] md:w-[6rem] md:h-[2.5rem] sm:w-[4rem] sm:h-[2rem] p-2 md:text-lg sm:text-base font-bold text-black-100 rounded-lg font-changa tracking-wide' onClick={handleClick}>Filter</button>
            </div>
            <div className="flex-grow">
                <div className="h-auto grid xl:grid-cols-8 lg:grid-cols-6 sm:grid-cols-3 gap-4">
                    {orders.map((data: orderRetailerData) => (
                        <RetailerOrder data={data} key={data._id} />
                    ))}
                </div>
            </div>
        </div>
    )
}