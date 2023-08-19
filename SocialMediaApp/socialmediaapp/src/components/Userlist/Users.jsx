import React, { useState,useEffect } from 'react';
import UserList from './UserList';
import axios from 'axios';

function Users({darks}) {
   const[user,setAlluser] = useState([]);
   
   useEffect(()=>{
     axios.get("https://dummyapi.io/data/v1/user",{headers:{'app-id':import.meta.env.VITE_APP_ID}})  
     .then((response)=>{
        const users = response.data.data;
        setAlluser([...users]);
     })
    },[])

    return (

   user.map((people) => 
   <UserList darkss={darks} id={people.id} name={people.firstName} picture={people.picture}/>
   )
  )

}

export default Users;
