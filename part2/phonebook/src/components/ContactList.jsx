import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

export const ContactList = ({filterItem, addContact}) => {
  return (
    <>
      <Box sx={
        {
          display: 'flex',
          flexDirection: 'column',
        }
      }>

        <Typography variant='h5' sx={{padding: "0 15px"}}>Contact List</Typography>
        <List>
          {
            addContact.map((nameList)=>
              nameList.username.toLowerCase().includes(filterItem.toLowerCase()) ||
              nameList.firstname.toLowerCase().includes(filterItem.toLowerCase()) ||
              nameList.number.includes(filterItem) ?
              (<ListItem key={nameList.id} sx={{padding: "0 15px"}}>
                <ListItemAvatar>
                  <Avatar alt={nameList.username} src={nameList.img} />
                </ListItemAvatar>
              <ListItemText  primary={nameList.username} secondary= {nameList.firstname}/>
              <ListItemText  primary={nameList.number} />
              </ListItem>) : null
            )
          }
        </List>
      </Box>
    </>
  )
}
