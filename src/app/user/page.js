"use client"
import Script from "next/script";
export default function User() {

    return (
      <main>
      <Script src="/location.js"  onLoad={()=>{console.log("file loaded")}} />
        <h2>User Page</h2>
       
      </main>
    );
  }
  
  