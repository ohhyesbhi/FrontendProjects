import * as React from 'react';
import { Box } from '@material-ui/core';
import {CircularProgress} from '@material-ui/core';
import Header from '../Header';

export default function Loader() {
  return (
    <>
    <Box sx={{  display: 'flex',flexDirection:"row",justifyContent:"center",alignItems:"center",height:"45vh"}}>
      <CircularProgress />
    </Box>
    </>
  );
}