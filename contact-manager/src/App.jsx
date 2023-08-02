import { useEffect, useState } from "react";
import Header from "./components/Header";
import Contactlist from "./components/Contactlist";
import Addcontact from "./components/Addcontact";

import {v4 as uuidv4} from "uuid";
import { ToastContainer } from 'react-toastify';
 
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

 const LOCAL_STORAGE_KEY = "contacts"
 const [contact,setContact] = useState([])

 function Email(email,name){
   setContact([...contact,{id:uuidv4(),name:name,email:email}])
 }

 useEffect(()=>{
  const retriveData = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  setContact(retriveData)
 },[])

 useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY,JSON.stringify(contact))
 },[contact])

//  function Ondelete(){
//   console.log("delete")
//  }

function onDelete(id){
  let filteredArr = contact.filter(contact=>{
    if(id != contact.id){
      return contact;
    }
  })

  setContact(filteredArr);
}
  return (
  <>
     <div className="ui container">
        <ToastContainer/>
       <Header/>
       <Addcontact addEmail = {Email} />
       <Contactlist contacts = {contact} a={onDelete} /> 
    
     </div>
  </>
  )
}

export default App
