import AddVendorpoints from "@/components/AddVendorpoints/AddVendorpoints"
import DispVendorPoints from "@/components/DispVendorPoints/DispVendorPoints"

export default function r() {
    return (
        <div className="md:m-5 sm:my-5 h-full flex flex-col justify-center items-center bg-[#323232] rounded-lg">
            <DispVendorPoints/>
            <div className="flex flex-col md:h-1/4 sm:h-1/4 w-full md:text-[5rem] sm:text-[4.0rem] sm:text-bold text-[#DDD0C8] font-rokkitt justify-center items-center sm:text-center sm:mt-5 leading-[3.5rem]">
                Get Started!
            </div>
            <div>
                <AddVendorpoints/>
            </div>
            <div className="flex sm:flex-col lg:flex-row md:h-1/2 sm:h-3/4 w-full">
                <div className="sm:w-auto sm:h-1/3 lg:w-1/3 lg:h-auto border border-[#DDD0C8] m-5 shadow-md shadow-gray-100 rounded-md flex flex-row justify-center items-center md:text-[2rem] sm:text-[1.5rem] font-rokkitt text-[#98AFC7] text-center">
                    Place an order from a connection      
                </div>
                <div className="sm:w-auto sm:h-1/3 lg:w-1/3 lg:h-auto border border-[#DDD0C8] m-5 shadow-md shadow-gray-100 rounded-md flex flex-row justify-center items-center md:text-[2rem] sm:text-[1.5rem] font-rokkitt text-[#98AFC7] text-center">
                    Get approved and pay for the product 
                </div>
                <div className="sm:w-auto sm:h-1/3 lg:w-1/3 lg:h-auto border border-[#DDD0C8] m-5 shadow-md shadow-gray-100 rounded-md flex flex-row justify-center items-center md:text-[2rem] sm:text-[1.5rem] font-rokkitt text-[#98AFC7] text-center">
                    Maintain the stocks in the inventory
                </div>
            </div>
        </div>
    )
}