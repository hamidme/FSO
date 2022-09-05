import styled from '@emotion/styled'
import { Box, TextField } from '@mui/material'
import React from 'react'

const StyledInnerBox = styled(Box)({
  display: 'flex',
  flexDirection: 'row',
  margin: ' 5px 0 10px 10px'
})

const StyledTextField = styled(TextField)({
  margin: '0 5px',
  width: '100%'
})

export const SearchBar = () => {
  return (
    <>
      <StyledInnerBox>
        <StyledTextField id="outlined-basic" label="Search by name" size='small' variant="outlined" />
      </StyledInnerBox>
    </>
  )
}
