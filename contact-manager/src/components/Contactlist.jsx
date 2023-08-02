import React from 'react'
import Contactcard from './Contactcard'

function Contactlist({contacts,a}) {

  return (
    <>
      <div className='ui celled list'>
        {
            contacts.map((contact) => (
                <Contactcard name = {contact.name} email = {contact.email} key={contact.id} id={contact.id} a={a} />
            ))
        }
      </div>
    </>
  )
}

export default Contactlist;
