import DispVendorPoints from "@/components/DispVendorPoints/DispVendorPoints";
import PlaceRetailerOrder from '@/components/PlaceRetailerOrder/PlaceRetailerOrder';

export default function placeOrder() {
    return (
        <div className="md:m-5 sm:my-5 h-full flex flex-col items-center bg-[#323232] rounded-lg">
            <DispVendorPoints />
            <PlaceRetailerOrder/>
        </div>
    )
}