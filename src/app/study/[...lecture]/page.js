

const Lectures=({params})=>{
    console.log(params);
   
    return(
        <>
        <h1>Day of the lecture is: {params.lecture[0]}</h1>
        <h3>Period of the lecture is: {params.lecture[1]}</h3>
        
        </>
    )
}

export default Lectures;