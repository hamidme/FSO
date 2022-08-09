import React from 'react'
import Parts from './Parts'

const Contents = ({content, exercise}) => {
  return (
    <div>
      <Parts content= {content} exercise = {exercise} / >
    </div>
  )
}

export default Contents
