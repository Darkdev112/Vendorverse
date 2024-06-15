import DispVendorPoints from "@/components/DispVendorPoints/DispVendorPoints"
import ManageOrderDetails from "@/components/ManageOrderDetails/ManageOrderDetails"

export default function manageOrder({params} : {params : {oid : string}}) {
    const {oid} = params
    return (
        <div className="md:m-5 sm:my-5 h-full flex flex-col  bg-[#323232] rounded-lg px-12 py-12">
            <DispVendorPoints />
            {!oid && <div className="w-full h-3/4 flex justify-center items-center">
                <p className="lg:text-3xl md:text-2xl sm:xl font-changa text-[#DDD0C8]">
                    Select an order from the order list
                </p>
            </div>}
            {oid && <ManageOrderDetails/>}
        </div>
    )
}