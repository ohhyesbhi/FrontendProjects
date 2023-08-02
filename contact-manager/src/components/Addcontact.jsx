import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { showSucess } from '../toasts/toasts';


function Addcontact({addEmail}) {

const [value,setValue] = useState(false)
const {register,handleSubmit,formState:{errors}} = useForm();



const handleOnSubmit = (data) => {
    addEmail(data.emails,data.names);
    showSucess("Contact added successfully")
}

  return (
  <>
   <div className='ui main'>
    <h2>Add contact</h2>
    <form className = 'ui form' onSubmit={handleSubmit(handleOnSubmit)}>
        <div className = 'field'>
            <label>Name</label>
            <input type = 'text' name = 'names' placeholder = 'Name' 
            {...register("names",{ required : true , maxLength : 20})}
            />
        </div>
        <div>
            {errors.names && errors.names.type == "required" && <p style={{marginBottom:"0.5rem",color:"red"}}>This field is mandatory </p>}
            {errors.names && errors.names.type == "maxLength" && <p style={{marginBottom:"0.5rem",color:"red"}}>Name cannot exceed 20 characters</p>}
      
        </div>

        <div className = 'field'>
            <label>Phone no</label>
            <input type = 'text' placeholder = 'XXXXXXXXXX' 
            name="emails"
            {...register("emails",{required : true, minLength : 10, maxLength : 10 , pattern : /^[0-9]{10}$/i})}
            />
        </div>
        <div>
            {errors.emails && errors.emails.type == "required" && <p style={{marginBottom:"1rem",color:"red"}}>This field is mandatory</p>}
            {errors.emails && errors.emails.type == "minLength" && <p style={{marginBottom:"1rem",color:"red"}}>Only 10 digits are allowed not less than that</p>}
            {errors.emails && errors.emails.type == "maxLength" && <p style={{marginBottom:"1rem",color:"red"}}>Only 10 digits are allowed not more than that</p>}
            {errors.emails && errors.emails.type == "pattern" && <p style={{marginBottom:"1rem",color:"red"}}>Only numbers are allowed</p>}

          
        </div>

        <button className = 'ui button blue' onClick={()=>{
           
        }}>Add</button>

      
    </form>
   </div>
  </>
  )
}

export default Addcontact
