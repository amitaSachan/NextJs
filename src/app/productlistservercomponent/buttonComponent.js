'use client'
export default function ButtonComponent(props){
    console.log("props",props)
    return(
        <>
        <button onClick={()=>alert(props.price)}>Check Price</button>
        </>
    )
}