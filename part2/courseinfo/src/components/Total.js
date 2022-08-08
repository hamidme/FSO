import React from 'react'

const Total = ({parts}) => {
  let sum = 0
  for(let i of parts){
    sum+=i.exercises
  }
 
  return (
    <div>
      <p><strong>total of {sum} exercises</strong> </p>
    </div>
  )
}

export default Total