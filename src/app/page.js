import Link from "next/link";

export default function Home() {  
  return (
    <main>
      <h2>Welcome to next Js !!! Routing</h2>   
      <Link href="./users">Go to user page to see the global css used in h2 tag</Link>     
    </main>
  );
}
