'use server'
import { cookies } from "next/headers";

export default async function deleteToken(){
    const cookieStore = cookies()
    const sessionToken = cookieStore.get('session_token')?.value 
    return sessionToken ? sessionToken : "" 
}