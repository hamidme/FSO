import styled from '@emotion/styled'
import { Avatar, Box, Button, InputLabel, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const contactList = [
  {
    username: 'Muri Ojerinde',
    img:'https://images.pexels.com/photos/35183/people-homeless-man-male.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    number: '08034080891',
    id: 1
  },
  {
    username: 'Sola Aribisala',
    img:'https://images.pexels.com/photos/1139743/pexels-photo-1139743.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    number: '08034026391',
    id: 2
  }
]


const StyledInnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  margin: ' 5px 0 10px 10px',
  
})

const StyledTextField = styled(TextField)({
  margin: '0 5px',
  width: '100%'
})

export const MyForm = () => {
  const [addName, setAddName] = useState(contactList)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newImg, setNewImg] = useState('')

  const handleAddName = (event)=>{
    event.preventDefault()
    const contactObject = {
      username: newName,
      img:newImg,
      number: newNumber,
      id:addName.length + 1
    }
    setAddName([...addName, contactObject])
    setNewName('')
    setNewNumber('')
    setNewImg('')
  }

  const handleNewName = (event)=>{
    setNewName(event.target.value)
  }

  const handleNewNumber = (event)=>{
    setNewNumber(event.target.value)
  }

  const handleNewImg = (event)=>{
    setNewImg(event.target.value)
  }

  return (
    <>
      <InputLabel>
        <Typography variant='body' sx={{padding:' 0 15px'}}>Add a New Name and Number</Typography>
      </InputLabel>
      <form onSubmit={handleAddName}>
        <StyledInnerBox>
          <StyledTextField onChange={handleNewName} value={newName} type='text' id="name"  size='small' variant="outlined" label='Name' />
          <StyledTextField onChange={handleNewNumber} value={newNumber} type='phone' id="phone"  size='small' variant="outlined" label='Number' />
        </StyledInnerBox>
        <StyledInnerBox>
          <StyledTextField onChange={handleNewImg} value={newImg} type='link' id="avatar"  size='small' variant="outlined" label='Avatar URL' />
        </StyledInnerBox>
        <StyledInnerBox>
          <Button type='submit' variant="contained" sx={{width: '100%'}}>Add</Button>
        </StyledInnerBox>
      </form>
      <Box sx={
        {
          display: 'flex',
          flexDirection: 'column',
        }
      }>
        <Typography variant='h5' sx={{padding: "0 15px"}}>Contact List</Typography>
        <List>
          {
            addName.map((nameList)=>
              (<ListItem key={nameList.id} sx={{padding: "0 15px"}}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={nameList.img} />
                </ListItemAvatar>
              <ListItemText  primary={nameList.username} secondary={nameList.number} />
              </ListItem>)
            )
          }
          
        </List>
      </Box>
    </>
  )
}
