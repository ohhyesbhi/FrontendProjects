import React from 'react'
import { Card,Box,Stack} from '@mui/material'

function Signup() {
  return (
   <>
   <Box>
    <Stack>
   <Card>
   <label htmlFor='name'>Email</label>
            <label htmlFor='passwd'>Password</label>
        
            
            <input type='email' id='name'/>
            <input type='password' id='passwd'/>
    
 
   </Card>
   </Stack>
   </Box>
   </>
  )
}

export default Signup
