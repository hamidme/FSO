import React from 'react'
import Parts from './Parts'

const Contents = ({name, exercises}) => {
  return (
    <div>
      <Parts name = {name} exercises= {exercises} />
    </div>
  )
}

export default Contents
