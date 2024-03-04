import Link from "next/link";
import page from "@/app/page.module.css"

export default function Home() {  
  return (
    <main>
      <h2 className={page.content}>Welcome to next Js !!! Routing</h2>   
      <Link href="./users">Go to user page to see the global css used in h2 tag</Link>  
      <br />  <br />  
      <Link href="./cssmodules">CSS Modules</Link>     
    </main>
  );
}
