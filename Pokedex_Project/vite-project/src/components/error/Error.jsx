import React from 'react'
import { Link } from 'react-router-dom'
function Error() {
  return (
   <>
<div  style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"yellow"}}>
     <h2>Something went wrong........ </h2>
     <Link to="/"><button style={{padding:"15px"}}>Back to home</button></Link>
 </div>     
   </>
  )
}

export default Error
