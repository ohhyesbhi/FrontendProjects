import {useState,useContext} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from 'axios';
import LoadingButton from '@mui/lab/LoadingButton';
import PostCardContext from "../Providers/Provider";

function Input({dark}) {
    const [text,setText] = useState("");
    const [imgURL,setImgURL] = useState("")
    const [loading,setLoading] = useState(true)
    const {post,setPost} = useContext(PostCardContext);
    const {neww,setNeww} = useContext(PostCardContext);
     function createPost(){
      setNeww(false)
        setLoading(false)
        axios.post("https://dummyapi.io/data/v1/post/create",       // 1st argument
        {
            owner:"60d0fe4f5311236168a109ca",
            text:text,
            image:imgURL,
            likes:0,
            postDate:new Date()
        },
        {headers:{"app-id":import.meta.env.VITE_APP_ID}})

        .then((response)=>{
            setLoading(true)
           setPost([response.data,...post])
        })
    }
    

  return (
    
        (dark==true)?

   <Box>
   <TextField fullWidth 
      sx={{mt:"1rem"}} 
      id="outlined-basic" 
      label="Your next post..." 
      value={text}
      onChange={(e)=>setText(e.target.value)}
      variant="outlined" />

   <TextField fullWidth 
   sx={{mt:"1rem"}} 
   id="outlined-basic" 
   value={imgURL}
   onChange={(e)=>setImgURL(e.target.value)}
   label="Image for your post..." 
   variant="outlined" />
{
    (loading)?<Button sx={{mt:"1rem"}} onClick={createPost} variant="contained">Post</Button> :
              <LoadingButton  sx={{mt:"1rem"}}  loading variant="outlined" >Submit</LoadingButton>
}
   

 </Box>

   :

   <Box>
    <TextField fullWidth label="Your next post..."  sx={{mt:"1rem",bgcolor:"#b1b5b2"}} id="filled-hidden-label-small"  variant="filled" size="small"/>
    <br/>
    <TextField fullWidth label="Image for your post..."  sx={{mt:"1rem",bgcolor:"#b1b5b2"}} id="filled-hidden-label-small"  variant="filled" size="small"/>
    <Button sx={{mt:"1rem"}} variant="contained">Post</Button>
   </Box>
  )
}

export default Input
