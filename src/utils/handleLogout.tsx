'use server'
import { cookies } from "next/headers";

export default async function deleteToken(){
    const cookieStore = cookies();
    cookieStore.delete('session_token')
}