// "use client"

// import { ReactNode } from "react"
// import Navbar from "./Navbar"
// import { newSelector, newDispatch } from "@/redux/hooks"
// import { setToken } from "@/redux/features/sessionSlice"

// export default function NavbarWrapper({newsession} : {newsession : string | undefined}){
//     console.log("navbar wrapper running : ", newsession);
//     const {sessionToken} = newSelector((state) => state.session)
//     const dispatch = newDispatch()
//     if(newsession){
//         dispatch(setToken(newsession))        
//     }
//     return(
//             <Navbar/>
//     )
// }