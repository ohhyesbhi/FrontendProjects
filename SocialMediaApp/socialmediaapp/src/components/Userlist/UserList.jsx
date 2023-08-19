import React, { useState } from 'react'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import {grey} from '@mui/material/colors';
import {brown} from '@mui/material/colors';
import { Link } from 'react-router-dom';


export default function UserList({id,name,picture,darkss}) {
  const [count,setCount] = useState(1);

  
  return (
<List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
{[{count}].map((value) => {
  const labelId = `checkbox-list-secondary-label-${value}`;
  return (
    <ListItem
      key={value}
      disablePadding
    >
      <Link to={`/user/${id}`}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${value + 1}`}
            src={picture}
          />

        </ListItemAvatar>
        <ListItemText id={id} primary={name} />
      </ListItemButton>
      </Link>
    </ListItem>

  );
})}
</List>
  )
}