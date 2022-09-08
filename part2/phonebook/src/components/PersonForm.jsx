import styled from '@emotion/styled'
import { Box, Button, InputLabel, TextField, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const StyledInnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  margin: ' 5px 0 10px 10px',
  
})

const StyledTextField = styled(TextField)({
  margin: '0 5px',
  width: '100%'
})

export const PersonForm = ({addContact, setaddContact}) => {
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newImg, setNewImg] = useState('')
  
  const handleaddContact = (event)=>{
    event.preventDefault()
    const contactObject = {
      username: newName,
      img:newImg,
      number: newNumber,
      id:addContact.length + 1
    }

    const usernameList = addContact.map((list)=>(list.username))
    if (usernameList.includes(newName)){
        alert(`${newName} is already added to phonebook`)
    } else {
      setaddContact([...addContact, contactObject])
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
      <InputLabel>
        <Typography variant='body' sx={{padding:' 0 15px'}}>Add a New Name and Number</Typography>
      </InputLabel>
      <form onSubmit={handleaddContact}>
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
    </>
  )
}
