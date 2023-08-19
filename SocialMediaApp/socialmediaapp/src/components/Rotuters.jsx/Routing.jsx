import React from 'react';
import {Routes,Route} from "react-router-dom";
import SocialApp from '../SocialApp';
import Userdetails from '../userdetails/Userdetails';


function Routing() {
  return (
   <>

   <Routes>
    <Route path='/' element={<SocialApp/>}/>
    <Route path ="/user/:id" element={<Userdetails h="hello"/>}/>
   </Routes>
   </>
  )
}

export default Routing;
