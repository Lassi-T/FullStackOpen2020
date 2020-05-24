import React from 'react'

const Total = ({ course }) => {
    let initValue = 0
    const total = course.parts.reduce((s, p) => s + p.exercises, initValue)
    return(
      <p>Number of exercises {total}</p>
    ) 
  }

export default Total