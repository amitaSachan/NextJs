'use client'
import Link from "next/link";
import {useRouter} from "next/navigation"


export default function Home() {  
  const router=useRouter();
  const InnerComponent=()=>{
    return(
      <>
     
      <h2>Inner Component</h2>
      </>
    )
  }
  return (
    <main>
      <h2>Welcome to next Js !!! Routing</h2>   
      <Link href="/login">Go to login page</Link>
      <br />  <br />
      <Link href="/aboutUs">Go to About Us page</Link>
      <br />  <br />
      <button onClick={()=>router.push("/studentlist")}>Go for the dynamic routing</button>
      <hr />
      <InnerComponent />
    </main>
  );
}
