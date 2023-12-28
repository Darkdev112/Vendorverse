"use client"

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Fields, fields } from "./sidebarL";

const unactive = "bg-[#323232] text-[#DDD0C8]"
const active = "text-[#323232] bg-[#DDD0C8]"
export default function SidebarS() {
    const router = useRouter();
    const pathname = usePathname();
    const [selected, setSelected] = useState<string>(pathname.substring(13));

    const handleClick = (f: Fields) => {
        router.push(f.path)
    }

    useEffect(() => {
        setSelected(pathname.substring(13));
    }, [pathname])

    return (
        <div className="md:hidden h-[6rem] flex flex-col">
            <div className="w-full flex flex-row h-1/2 border-b border-gray-100">
                {fields.map((field: Fields) => {
                    if (field.id <= 3) {
                        return (
                            <div className={`w-1/3 ${field.id === 3? "" : "border-r"} flex justify-center items-center hover:border-[#323232] cursor-pointer transition font-changa ${selected === field.tag ? active : unactive}`} onClick={() => { handleClick(field) }} key={field.id}>
                                {field.name}
                            </div>
                        )
                    }
                })}
            </div>
            <div className="w-full flex flex-row h-1/2 border-b border-gray-100">
                {fields.map((field: Fields) => {
                    if (field.id > 3) {
                        return (
                            <div className={`w-1/2 ${field.id === 4? "border-r" : ""} flex justify-center items-center hover:border-[#323232] cursor-pointer transition font-changa ${selected === field.tag ? active : unactive}`} onClick={() => { handleClick(field) }} key={field.id}>
                                {field.name}
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}