"use client"

import { usePathname, useRouter } from "next/navigation"
import { useEffect, useState } from "react";

export interface Fields{
    id : number
    path : string
    tag : string
    name : string
}

const unactive = "bg-[#323232] text-[#DDD0C8] border-gray-100"
const active = "text-[#323232] bg-[#DDD0C8] border-[#323232]"
export const fields : Fields[] = [
    {
        id: 1,
        path: "/workspace/r/place-order",
        tag: "place-order",
        name: "Place Order",
    },
    {
        id: 2,
        path: "/workspace/r/order-list",
        tag: "order-list",
        name: "Order List",
    },
    {
        id: 3,
        path: "/workspace/r/order",
        tag: "order",
        name: "Manage Order",
    },
    {
        id: 4,
        path: "/workspace/r/track-order",
        tag: "track-order",
        name: "Track Order",
    },
    {
        id: 5,
        path: "/workspace/r/inventory",
        tag: "inventory",
        name: "Inventory",
    },
]

export default function SidebarL() {
    const router = useRouter();
    const pathname = usePathname();
    const [selected, setSelected] = useState<string>(pathname.substring(13));
    
    const handleClick = (f: Fields | string) => {
        router.push((typeof(f) == "object")?f.path:f)
    }

    useEffect(() => {
        setSelected(pathname.substring(13));
    },[pathname])

    return (
        <div className="flex flex-col lg:w-1/5 md:w-1/4 sm:hidden md:block border-r border-gray-100">
            {fields.map((field : Fields) => {
                return (
                    <div className={`mx-2 my-5 lg:h-[4rem] md:h-[3rem] rounded-md border px-3 py-1 ${selected === field.tag ? active : unactive} font-changa lg:text-[1.5rem] md:text-[1rem] flex justify-start items-center hover:border-[#323232] cursor-pointer transition`} onClick={() => { handleClick(field) }} key={field.id}>
                        {field.name}
                    </div>
                )
            })}
            <div className="my-5 text-center text-[#323232] font-changa text-md font-bold cursor-pointer hover:text-gray-100 transition" onClick={() => {handleClick("/workspace/r")}}>
                Get Started
            </div>
        </div>
    )
}