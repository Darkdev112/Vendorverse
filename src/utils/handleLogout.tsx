'use server'
import { cookies } from "next/headers";
import axios from "axios";

export default async function deleteToken(){
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('session_token')?.value 
    try {
        const response = await axios.delete(`${process.env.TESTING_URL}/logout`,{
            headers:{
                "Content-Type" : "application/json",
                "Authorization" : sessionToken
            },
            'withCredentials' :true,
        })
    } catch (error) {
        console.log(error)
    }
    cookieStore.delete("session_token")
}