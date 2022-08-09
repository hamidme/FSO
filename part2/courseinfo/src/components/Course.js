import React from 'react'
import Header from './Header'
import Contents from './Contents'

const Course = ({header, content, exercise}) => {
  return (
    <div>
      <Header header = {header}/>
      <Contents content = {content} exercise = {exercise}/>
    </div>
  )
}

export default Course