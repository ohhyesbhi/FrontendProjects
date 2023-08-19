import React from 'react'
import Avatar from '@mui/material/Avatar';
import { deepOrange } from '@mui/material/colors';


function Comments({arr}) {
    console.log("hello")
    return (
 
    <>
     <ul style={{listStyle:"none"}}>
     
            {
                arr.map((items)=>
               <div style={{display:"flex",marginTop:"0.5rem"}}>
                <Avatar
                sx={{ bgcolor: deepOrange[500], width: 28, height: 28 }} 
                alt="Remy Sharp"
                src="/broken-image.jpg"
              >
                A
              </Avatar>

               <li style={{marginLeft:"15px",marginTop:"2px"}}>{items}</li>
               
               </div>
                )
            }
      
     </ul>
    </>
  )
}

export default Comments
