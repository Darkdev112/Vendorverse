import DispVendorPoints from "@/components/DispVendorPoints/DispVendorPoints";
import OrderHeadingPart from "@/components/OrderHeadingPart/OrderHeadingPart";
import OrderRetailerList from "@/components/OrderRetailerList/OrderRetailerList";

export default function orderList() {
    return (
        <div className="md:m-5 sm:my-5 h-full flex flex-col  bg-[#323232] rounded-lg px-12 py-12">
            <DispVendorPoints />
            <OrderHeadingPart title="Your Orders" size="large"/>
            <OrderRetailerList/>
        </div>
    )
}