import React from 'react'
import Header from './Header'
import Contents from './Contents'
//import Total from './Total'

const Course = ({name, parts}) => {
  return (
    <div>
      <Header header = {name} />
      {parts.map((items) =>
        <Contents key={items.id} {...items} />
        )
      }
      {/*<Total parts = {parts} />*/}
    </div>
  )
}

export default Course