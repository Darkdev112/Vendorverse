import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";


export default function Profile(){
    const cookieStore = cookies();
    const session : undefined | {name : string, value : string}= cookieStore.get('session_token');
    if(session){
        console.log("hello");
        return(
            <>
             Hi
            </>
        )
    }
    else{
        redirect('/login')
    }
}