import React from 'react'

const Total = ({parts}) => {
  console.log(parts)

  const sum = parts.reduce((prevSum, part) => (prevSum + part.exercises), 0)
 
  return (
    <div>
      <p><strong>total of {sum} exercises</strong> </p>
    </div>
  )
}

export default Total