import styled from '@emotion/styled'
import { Box, TextField } from '@mui/material'
import React, { useState } from 'react'
import { ContactList } from './ContactList'
import { PersonForm } from './PersonForm'
//import contactList from './Data'
import axios from 'axios'
import { useEffect } from 'react'

const StyledInnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  margin: ' 5px 0 10px 10px',
  
})

const StyledTextField = styled(TextField)({
  margin: '0 5px',
  width: '100%'
})

export const Filter = () => {
  const [filterItem, setFilterItem] = useState('')
  const [addContact, setaddContact] = useState([])
  //console.log(addContact)

  useEffect(
    () => {
      axios
        .get('http://localhost:3001/contactList')
        .then(response => {
          setaddContact(response.data)
        })
    }, []
  )
 
  const handleFilterItem = (event) => {
    let value = event.target.value
    setFilterItem(value)
  }

  return (
    <>
      <StyledInnerBox>
        <StyledTextField
          onChange={handleFilterItem}
          id="outlined-basic"
          label="Search by name or number"
          size='small'
          variant="outlined"
          value={filterItem}
        />
      </StyledInnerBox>

      <PersonForm
        addContact = {addContact}
        setaddContact = {setaddContact}
      />

      <ContactList
        filterItem = {filterItem}
        addContact = {addContact}
      />
    </>
  )
}
