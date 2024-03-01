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
      <h2>API calling</h2>   
      <Link href="/productlist">Go to Client Component Page</Link>
      <br />
      <Link href="/productlistservercomponent">Go to Server Component Page</Link>
      <hr />
      <InnerComponent />
    </main>
  );
}
