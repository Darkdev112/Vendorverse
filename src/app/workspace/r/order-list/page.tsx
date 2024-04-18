import DispVendorPoints from "@/components/DispVendorPoints/DispVendorPoints";
import OrderRetailerList from "@/components/OrderRetailerList/OrderRetailerList";

export default function orderList() {
    return (
        <div className="md:m-5 sm:my-5 h-full flex flex-col  bg-[#323232] rounded-lg px-12 py-12">
            <DispVendorPoints />
            <div className="mb-2 flex flex-row justify-between">
               <p className="font-changa text-[#DDD0C8] lg:text-5xl sm:text-4xl">Your Orders</p>
            </div>
            <div className="border border-[#DDD0C8] w-3/4 mb-4"></div>
            <OrderRetailerList/>
        </div>
    )
}