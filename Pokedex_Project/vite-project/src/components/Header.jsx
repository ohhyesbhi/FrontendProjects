import {useState} from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';

function Header({setId}) {

const [text,setText] = useState("")

  return (
    <>
   <div style={{display:"flex",flexDirection:"column",alignItems:'center',justifyContent:"center"}}> 
     <div style={{display:"flex", flexDirection:"row",justifyContent:"center"}}>
        <Box sx={{width:{xs:200,sm:250,md:250}}}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png" style={{width:"100%",height:"100%"}}/>
        </Box>
     </div>
     <Box
    
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
        marginTop:"20px",
        display:"flex",
        flexDirection:{xs:"column",sm:"row",md:"row"},
        justifyContent:"center",
        alignItems:"center",
        marginLeft:{xs:"20px",sm:"45px",md:"80px"}
      }}
      noValidate
      autoComplete="off"
    >
     
      <TextField id="standard-basic" placeholder="Your Favourite Pokemon" variant="standard"
           onChange={(e)=>setText(e.target.value)}
      />
       <Link style={{textDecoration:"none"}} to={`/pokemon/${text}`} onClick={()=>setId(text)}> <Button sx={{backgroundColor:"black",color:"yellow",width:"100px",height:"40px",marginLeft:{xs:"50px",sm:"0",md:"0px"}}} variant="contained" >Search</Button></Link>
    </Box>
    
          
    
  </div>   
    </>
  )
}

export default Header
