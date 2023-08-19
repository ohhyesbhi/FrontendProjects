import React, { useState,useContext} from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {grey} from '@mui/material/colors';
import {pink} from '@mui/material/colors';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import Comments from './comments/Comments';
import { deepOrange } from '@mui/material/colors';

 function PostCard({check,image,picture,text,firstName,lastName,darkss,likes}) {

 const [like,setLike] = useState(true);
 const [count,setCount] = useState(0);
 const [commenttext,setText] = useState("");
 const [arr,setArr] = useState([]);


  return (
  

    
<div style={{width:"60%",marginTop:"2rem",marginLeft:"2rem"}} >
<Card sx={{ 
      maxWidth: 400
   
    }}>
  <CardHeader  height="400"
    avatar={
      <Avatar  aria-label="recipe">
        <img   src={picture} style={{width:"100%"}} ></img>
      </Avatar>
    }
    
    title={firstName +" "+lastName+
    "  ,     "
  +"September 14 2016"
  }
  />
  <CardMedia 
    component="img"
    height="400"
    
    image={(image.lenght!=0)?image:null}
         alt="Paella dish"
  />
  <CardContent >
    <Typography variant="body2"  >
      {text}
    </Typography>
  </CardContent>

  {
    (like)?<FavoriteBorderIcon style={{margin:"0",marginLeft:"5px"}} onClick={()=>{ 
      setCount(count+1) 
      setLike(!like) }}
       />
      
       :
       <FavoriteIcon sx={{ color:pink[500],margin:"0",marginLeft:"5px" }} onClick={()=>{ 
      setCount(count+1) 
      }}/>
    
  }
  {
 (like)?<p></p>:<p style={{margin:"0",marginLeft:"3px"}}>{count} likes</p>
}
<div style={{display:"flex",justifyContent:"space-around",flexDirection:"row",marginTop:"25px"}}>

<TextField
        id="input-with-icon-textfield"
        label="Comments"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
             <Avatar
  sx={{ bgcolor: deepOrange[500], width: 28, height: 28 }} 
  alt="Remy Sharp"
  src="/broken-image.jpg"
>
  A
</Avatar>

            </InputAdornment>
          ),
        }}
        variant="standard"
        value={commenttext}
        onChange={(e)=>setText(e.target.value)}
      />
 

<Button sx={{mt:"2rem",mb:"1rem"}} size="small" variant="contained" onClick={()=>setArr([...arr,commenttext])} >post</Button>
</div>
<Comments arr={arr}/>     
</Card>
</div>
    
  
  
  
    )
}
 
export default PostCard;