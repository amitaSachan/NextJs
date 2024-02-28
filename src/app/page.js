'use client'
import Link from "next/link";
import styles from "./page.module.css";


export default function Home() {  
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
      <br />
      <Link href="/aboutUs">Go to About Us page</Link>
      <hr />
      <InnerComponent />
    </main>
  );
}
