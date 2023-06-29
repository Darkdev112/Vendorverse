"use client"

interface ButtonProps{
    size : 'small' | 'medium' | 'large'
    handleClick : () => void
    text : string
}

export default function Button({size, handleClick, text} : ButtonProps){
    let classes;
    if(size==='large'){
        classes = 'w-[6rem] h-[2.5rem] p-2 text-lg font-bold text-black-100 rounded-lg'
    }
    else if(size === 'medium'){
        classes = 'w-[4rem] h-[2rem] p-1 text-md rounded-lg font-bold'
    }
    else{
        classes = 'w-[3rem] h-[1.5rem] text-base rounded-sm'
    }
    return(
        <button className= {`${classes} bg-[#DDD0C8] border border-gray-100 shadow-sm  text-black-100 text-[#323232] hover:bg-[#323232] hover:text-[#DDD0C8]`} onClick={handleClick}>{text}</button>
    )
} 