import React from 'react'
import Header from './Header'
import Content from './Content'
import Total from './Total'

const Course = ({ course }) => {
  return (
    <div>
      <ul>
        <Header course={course} />
        <Content course={course} />
        <strong>
          <Total course={course} />
        </strong>
      </ul>
    </div>
  )
}

export default Course
