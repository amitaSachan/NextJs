"use client"
import {useRouter} from "next/navigation";
const login=()=>{
    const router=useRouter();
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={()=>router.push("/")}>Go to Home page</button>
        </>
    )
}

export default login;