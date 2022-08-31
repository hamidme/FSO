import React from 'react'
import Content from './Contents'
import Header from './Header'

const Course = ({header, parts}) => {
  return (
    <>
      <Header header = {header}/>
      <Content part = {parts}/>
    </>
  )
}
export default Course
