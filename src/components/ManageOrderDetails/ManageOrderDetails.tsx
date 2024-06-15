"use client"
import OrderHeadingPart from "../OrderHeadingPart/OrderHeadingPart"

export default function ManageOrderDetails() {
    const status="new"
    return (
        <div>
            <OrderHeadingPart title="Order Details" size="large"/>
            <div className="my-5  h-auto flex flex-row sm:flex-wrap md:flex-nowrap gap-4">
                <div className="md:w-1/2 sm:w-full flex flex-row">
                    <p className="md:w-1/2 lg:w-auto font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#98AFC7] font-bold">Product Name<span className="mx-2">:</span></p>
                    <p className="md:w-1/2 lg:w-auto font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#DDD0C8] ml-2">Item 1</p>
                </div>
                <div className="md:w-1/2 sm:w-full flex flex-row">
                    <p className="md:w-1/2 lg:w-auto font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#98AFC7] font-bold">Product Quantity<span className="mx-2">:</span></p>
                    <p className="md:w-1/2 lg:w-auto font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#DDD0C8] ml-2">3</p>
                </div>
            </div>
                <div className=" flex flex-row my-5 ">
                    <p className="font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#98AFC7] font-bold">Distributor Name<span className="mx-2">:</span></p>
                    <p className="font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#DDD0C8] ml-2">Distributor</p>
                </div>
                <div className=" flex flex-row my-5 ">
                    <p className="font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#98AFC7] font-bold">Distributor Email<span className="mx-2">:</span></p>
                    <p className="font-rokkitt lg:text-2xl md:text-lg sm:text-base text-[#DDD0C8] ml-2 ">distributor@gmail.com</p>
                </div>
            <OrderHeadingPart title="Status" size="small"/>
            <div className="my-5  h-auto flex flex-row  sm:flex-wrap md:flex-nowrap font-rokkitt text-gray-100 lg:text-2xl md:text-xl sm:text-lg gap-4">
                <p className={`lg:mr-[3rem] ${status.localeCompare("new") == 0 ? "font-bold text-gray-500 drop-shadow-[2px_2px_var(--tw-shadow-color)]" : ""}`}>New</p>
                <p className={`lg:mr-[3rem] ${status.localeCompare("pending") == 0 ? "font-bold text-yellow-500 shadow-2xl shadow-black" : ""}`}>Pending</p>
                <p className={`lg:mr-[3rem] ${status.localeCompare("completed") == 0 ? "font-bold text-green-500 shadow-2xl shadow-black " : ""}`}>Completed</p>
                <p className={`lg:mr-[3rem] ${status.localeCompare("rejected") == 0 ? "font-bold text-red-500 shadow-2xl shadow-black" : ""}`}>Rejected</p>
            </div>
        </div>
    )
}