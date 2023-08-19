import {useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function UserDetailsHook() {
  
    const [users,setUsers] = useState({});
    const[loading,setLoading] = useState(true);
    const {id} = useParams();
   
    useEffect(()=>{
        axios.get(`https://dummyapi.io/data/v1/user/${id}`,{headers:{"app-id":import.meta.env.VITE_APP_ID}})
        .then((response)=>{
            setUsers({...response.data})
            setLoading(false)
        })
    },[])

  return [users,setUsers,loading,setLoading,id]

}


