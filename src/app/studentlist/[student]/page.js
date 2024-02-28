'use client'
export default function Student({params}){
   
    console.log("params",params)
    return(
        <><h1>Student List page</h1>
        <h2>name is :{params.student}</h2></>
    )
}