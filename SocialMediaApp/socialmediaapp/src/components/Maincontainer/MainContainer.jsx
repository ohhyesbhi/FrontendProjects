
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import PostCardList from '../Postcardlist/PostCardList';
import Users from '../Userlist/users';
import { useContext } from 'react';

import PostCardContext from "../Providers/Provider"


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function MainContainer({dark}) {

const {post,setPost} = useContext(PostCardContext);

  return (
   
      <Grid container justifyContent="center" rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={0} md={2}>
        <Users darks={dark}/>
        
        </Grid>
        <Grid container style={{width:"60%"}} justifyContent="center" direction="column" alignItems="center" xs={12} md={12}>
         <PostCardList sx={{width:"40%"}} darks={dark}/>
             
        </Grid>
        
      </Grid>
  
  );
}