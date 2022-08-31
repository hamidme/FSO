import { Divider, List, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Parts = ({part}) => {
  let total = 0
  for(let i of part ){
      total+=i.exercises
  }
  return (
    <>
    {part.map(
      (item)=>
        <List key={item.id} variant='p'>
          <ListItemText>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
            {item.name}
            </Typography>
             {" — "}{item.exercises}
          </ListItemText>
        </List>
    )}
      <Typography variant='h6'>Total of {total} exercises</Typography>
      <Divider />
    </>
  )
}

export default Parts
