import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';



import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Navbar from "../Navbar/NavBar";
import axios, { all } from 'axios';
import { useParams } from 'react-router-dom';
import UserDetailsHook from '../Hooks/UserDetailsHook';

function Userdetails({h}) {
 console.log("hello")
    const [users,setUsers,loading,setLoading,id] = UserDetailsHook();
    // Initial code before using hooks in seeperate file

    // const {id} = useParams();
    // const [users,setUsers] = useState({});
    // const[loading,setLoading] = useState(true)
   
    // useEffect(()=>{
    //     axios.get(`https://dummyapi.io/data/v1/user/${id}`,{headers:{"app-id":import.meta.env.VITE_APP_ID}})
    //     .then((response)=>{
    //         setUsers({...response.data})
    //         setLoading(false)
    //     })
    // },[])

    const theme = useTheme();
console.log(users)
  return (

        <>
        <Navbar/>

        {
            loading ? "Loading...":<Card sx={{ display: 'flex' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column'}}>
              <CardContent sx={{ flex: '1 0 auto' }}>
                <Typography component="div" variant="h5">
                {h}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                 {users.email}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                 DOB : {users.dateOfBirth}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div">
                 Phone no : {users.phone}
                </Typography>
                
              </CardContent>
              
            </Box>
            <CardMedia
              component="img"
              sx={{ width: 151 }}
              image={users.picture}
              alt="Profile picture of user"
            />
          </Card>
        }
        
       </>

   
  )
}

export default Userdetails
