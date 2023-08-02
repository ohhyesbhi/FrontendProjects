import React from 'react';
import user from "../images/user.png"
import { showError } from '../toasts/toasts';

function Contactcard({name,email,id,a}) {

  
    return (
    <>
      <div className='item'>
        <img className='ui avatar image' src={user} alt='user'/>
        <div className='content'>
            <div className='header'>{name}</div>
            <div >{email}</div>
        </div>
        <i className='trash alternate outline icon'
        style={{color:"red", marginTop:"10px"}}
        onClick={()=>{
          a(id)
          showError("Contact removed")
        }}
       
       ></i>

      </div>
    </>
    )
}

export default Contactcard
