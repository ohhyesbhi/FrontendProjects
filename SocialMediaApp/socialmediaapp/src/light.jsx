<List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {[{count}].map((value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem
            key={value}
            disablePadding
          >
            <ListItemButton>
              <ListItemAvatar>
                <Avatar
                  alt={`Avatar n°${value + 1}`}
                  src={picture}
                />

              </ListItemAvatar>
              <ListItemText id={id} primary={name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>