import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React, { useState } from 'react'
import {Add as AddIcon, DateRange, EmojiEmotions, Image, VideoCameraBack, PersonAdd} from '@mui/icons-material'
import { styled } from '@mui/system'

const StyledModal = styled(Modal)({
  display:"flex",
  alignItems: "center",
  justifyContent: 'center'
})

const UserBox = styled(Box)({
  display:"flex",
  alignItems: "center",
  gap: '10px',
  marginBottom : "10px"
})

const Add = () => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Tooltip onClick={(e)=>setOpen(true)}
        title="Add"
        sx={{position: "fixed",
        bottom:20,
        left:{xs:"calc(50% - 25px)", md:30}}}
      >
        <Fab color="primary" aria-label="add" >
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={(e)=>setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={3}>
          <Typography variant='h6' color="gray" textAlign='center'>
            Create Post
          </Typography>
          <UserBox>
            <Avatar alt="Cindy Baker"
              src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" 
              sx={{width:30, height:30}}
            />
            <Typography fontWeight={500} variant="span">Mide Lammy</Typography>
          </UserBox>
          <TextField
              sx={{width: '100%'}}
              multiline
              rows={3}
              placeholder="Share what's on your mind"
            />
          <Stack direction="row" gap={1} my={2}>
            <EmojiEmotions color='primary'/>
            <Image color='secondary'/>
            <VideoCameraBack color='success'/>
            <PersonAdd color='error'/>
          </Stack>
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            fullWidth
          >
            <Button>Post</Button>
            <Button sx={{width:'100px'}}><DateRange/></Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  )
}

export default Add