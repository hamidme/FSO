import styled from '@emotion/styled'
import { Avatar, Box, Button, InputLabel, List, ListItem, ListItemAvatar, ListItemText, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import contactList from './Data'

const StyledInnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  margin: ' 5px 0 10px 10px',
  
})

const StyledTextField = styled(TextField)({
  margin: '0 5px',
  width: '100%'
})

export const PersonForm = () => {

  const [filterItem, setFilterItem] = useState('')
  const [addName, setAddName] = useState(contactList)
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newImg, setNewImg] = useState('')


  const handleFilterItem = (event) => {
    let value = event.target.value
    setFilterItem(value)
  }
  
  const handleAddName = (event)=>{
    event.preventDefault()
    const contactObject = {
      username: newName,
      img:newImg,
      number: newNumber,
      id:addName.length + 1
    }

    const usernameList = addName.map((list)=>(list.username))
    if (usernameList.includes(newName)){
        alert(`${newName} is already added to phonebook`)
    } else {
      setAddName([...addName, contactObject])
      setNewName('')
      setNewNumber('')
      setNewImg('')
    }
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

    <StyledInnerBox>
        <StyledTextField
          onChange={handleFilterItem}
          id="outlined-basic"
          label="Search by name"
          size='small'
          variant="outlined"
          value={filterItem}
        />
      </StyledInnerBox>

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
              nameList.username.toLowerCase().includes(filterItem.toLowerCase()) ?
              (<ListItem key={nameList.id} sx={{padding: "0 15px"}}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src={nameList.img} />
                </ListItemAvatar>
              <ListItemText  primary={nameList.username} secondary={nameList.number} />
              </ListItem>) : null
            )
          }
        </List>
      </Box>
    </>
  )
}
