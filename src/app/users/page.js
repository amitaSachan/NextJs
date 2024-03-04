'use client'
import { useState } from "react"

export default function users()
{
    const [h3style,setH3Style]=useState({})
    return(
        <>
        <h2>Hello users</h2>
        <h3 style={h3style}>The background color will be changed for this senetnce when user clicks on button</h3>
        <button onClick={()=>setH3Style({backgroundColor:"yellow"})}>Click to change the color</button>
        </>
        
    )
}