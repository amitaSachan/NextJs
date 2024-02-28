"use client"
import {useRouter} from "next/navigation";
import Link from "next/link";
const login=()=>{
    const router=useRouter();
    return(
        <>
        <h1>Login Page</h1>
        <button onClick={()=>router.push("/")}>Go to Home page</button>
        <br /><br />
        <Link href="/login/loginteacher">Go to Teacher login page</Link>
        <br /><br />
        <Link href="/login/loginstudent">Go to Student login page</Link>
        </>
    )
}

export default login;