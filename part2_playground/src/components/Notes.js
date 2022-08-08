import React from 'react'

const Notes = ({title, company, location, type, date}) => {
  return (
    <div>
        <h2>{title}</h2>
         <p>{company}</p>
         <p>{location}</p>
         <p>{type}</p>
         <p>{date}</p>
    </div>
  )
}

export default Notes;