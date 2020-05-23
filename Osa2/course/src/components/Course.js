import React from 'react'
import Header from './Header'
import Content from './Content'

const Course = ({course}) => {
    return (
        <div>
            <ul>
            <Header course={course} />
            <Content course={course} />
            </ul>
        </div>
    )
}

export default Course