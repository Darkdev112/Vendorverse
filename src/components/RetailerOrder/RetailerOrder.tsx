"use client"
import {useRouter} from "next/navigation";
import { BiSolidFolderOpen } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import { TiTickOutline } from "react-icons/ti";
import { MdOutlinePending } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { IconType } from "react-icons/lib";
import { orderRetailerData } from "@/constants/order_data"

export default function RetailerOrder({data} : {data : orderRetailerData}){
    const router = useRouter()
    const handleClick = () => {
        router.push(`order/${data._id}`)
    }

    const getIcon : (status : string) => {Icon : IconType,color : 'green' | 'red' | 'yellow' | 'grey'} = (status) => {
        switch(status){
            case 'new' :
                return {
                    Icon : FaPlus,
                    color : "grey",
                } 
            case 'pending':
                return {
                    Icon : MdOutlinePending,
                    color : "yellow",
                }  
            case 'rejected':
                return  {
                    Icon : RxCross2,
                    color : "red",
                }  
            default:
                return {
                    Icon : TiTickOutline,
                    color : "green",
                }
        }
    }
    
    const {Icon,color} = getIcon(data.status)
    return(
        <div className="h-fit w-fit hover:cursor-pointer" onClick={handleClick}>
            <BiSolidFolderOpen className="text-[#DDD0C8] h-[6rem] w-[6rem]" />
            <div className="mb-2 w-full flex flex-row items-center">
                <Icon  className="ml-2" color={color}/>
                <p className="text-sm text-[#DDD0C8] ml-2">{data.product_name}</p>
            </div>
        </div>
    )
}