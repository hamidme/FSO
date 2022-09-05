import styled from '@emotion/styled'
import {Box, colors, Typography } from '@mui/material'
import React from 'react'
import { SearchBar } from './SearchBar';
import { MyForm } from './MyForm';

const StyledBox = styled(Box)({
  backgroundColor: colors.grey[100],
  margin: 'auto',
  padding: 20,
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '5px'
  
})

const Wrapper = () => {
  return (
    <StyledBox>
      <Typography variant="h3" color="initial" sx={{alignSelf: 'center', marginBottom: '10px'}}>My Contacts</Typography>
      <SearchBar/>
      <MyForm/>
    </StyledBox>
  )
}

export default Wrapper