import SidebarL from "@/components/WorkspaceRSideBarL/sidebarL"
import SidebarS from "@/components/WorkspaceRSideBarL/sidebarS"

export default function rLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <div className="md:mx-8 sm:mx-2 sm:mt-4 mb-8 flex flex-row h-[100vh] rounded-md bg-[#323232] bg-clip-padding backdrop-filter bg-opacity-10 border border-gray-100 shadow-md">
                <SidebarL/>
                <div className="flex flex-col lg:w-4/5 md:w-3/4 sm:w-full h-full">
                    <SidebarS/>
                    {children}
                </div>
            </div>
        </>
    )
}