import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs: "none", sm: "block"}}}>
      <Box position='fixed' width={350}>
        <Typography variant='h6'  fontWeight = {100} >Online friends</Typography>
        <AvatarGroup max={5}>
          <Avatar alt="Murtadh Bankole" src="https://img.freepik.com/free-photo/young-attractive-handsome-guy-feels-delighted-gladden-amazed_295783-535.jpg?w=1380&t=st=1660673165~exp=1660673765~hmac=301d5f36f2ff6c6749ad80a2233c2ed67013c134baeb40da7bf54a1c397757aa" />
          <Avatar alt="Ibitoye Maruf" src="https://img.freepik.com/free-photo/half-length-portrait-arabian-saudi-man-dark-blue-studio-background-young-male-model-smiling-pointing-concept-business-finance-facial-expression-human-emotions-technologies_155003-30443.jpg?w=1380&t=st=1660673191~exp=1660673791~hmac=f81dd52689501397a65d514b3332cc2c2279959f92e2efa588557b351b3287f9" />
          <Avatar alt="Mushafa Oke" src="https://img.freepik.com/free-photo/portrait-joyful-young-man-white-shirt_171337-17467.jpg?w=1380&t=st=1660673223~exp=1660673823~hmac=707c840ce54277ca9ae5c55f099c04b93f0143e90202c83bc6b96e05454510c2" />
          <Avatar alt="Adeniran Misbahudeen" src="https://img.freepik.com/free-photo/bearded-man-shows-gesture-expressive-joy_1187-5824.jpg?w=740&t=st=1660673286~exp=1660673886~hmac=c7db7c281a45a2c70e6b3ab0a20c5eaf3e70db2ef9f079df6b2010f2ec0c9cef" />
          <Avatar alt="Ayma Yousri" src="https://img.freepik.com/premium-photo/young-arab-man-wearing-typical-arab-clothes-isolated-white-wall-looking-sideways-with-doubtful-skeptical-expression_1187-131546.jpg?w=1380" />
        </AvatarGroup>
        <Typography variant='h6'  fontWeight = {100} >Latest Photos</Typography>
        <ImageList cols={3} rowHeight={120} sx={{my:2}}>
          <ImageListItem>
            <img
              src = 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src = 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
              alt=''
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src = 'https://images.unsplash.com/photo-1522770179533-24471fcdba45'
              alt=''
            />
          </ImageListItem>
        </ImageList>

        <Typography variant='h6'  fontWeight = {100} mt={2}>
          Latest Conversation
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Tunde Ajala
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://images.unsplash.com/photo-1551782450-a2132b4ba21d" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Ijaodola, Onayemi, Bunmi
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://images.unsplash.com/photo-1522770179533-24471fcdba45" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Tunde Mafikuyomi
              </Typography>
              {' — Do you have Paris recommendations? Have you ever…'}
            </React.Fragment>
          }
        />
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}

export default Rightbar
