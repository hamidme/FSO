import React from 'react'


const Total = ({exercise}) => {
  // let sum = 0
  // console.log(exercise.parts)
  // for(let i of exercise.parts){
  //   sum+=i.exercises
  //   }
  
  const sum = exercise.parts.reduce((prevSum, part) => (prevSum + part.exercises), 0)
 
  return (
    <div>
      <p><strong>total of exercises {sum} </strong></p>
    </div>
  )
}

export default Total