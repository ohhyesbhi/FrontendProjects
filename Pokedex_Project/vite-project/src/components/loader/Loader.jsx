import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Header from '../Header';

export default function Loader() {
  return (
    <>
    <Header/>
    <Box sx={{  display: 'flex',flexDirection:"row",justifyContent:"center",alignItems:"center",height:"95vh"}}>
      <CircularProgress />
    </Box>
    </>
  );
}