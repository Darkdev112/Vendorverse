"use client"

export default function OrderHeadingPart({title, size} : {title : string, size : "large" | "small"}) {
    return (
        <>
            {size=="large" && <><div className="mb-2 flex flex-row justify-between">
                <p className="font-changa text-[#DDD0C8] lg:text-5xl sm:text-4xl">{title}</p>
            </div>
            <div className="border border-[#DDD0C8] w-3/4 mb-4"></div></>}
            {size=="small" && <><div className="flex flex-row justify-between mt-[3rem]">
                <p className="font-changa text-[#DDD0C8] lg:text-3xl sm:text-2xl ">{title}</p>
            </div>
            <div className="border border-[#DDD0C8] w-3/4 mb-4"></div></>}
        </>
    )
}