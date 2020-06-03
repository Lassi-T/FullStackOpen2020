import React from 'react'
import deletePerson from './deletePerson'

const Person = ({ person, setPersons }) => {
  return (
    <div>
      {person.name} {person.number}{' '}
      <button onClick={() => deletePerson(person, setPersons)}>
        delete
      </button>
    </div>
  )
}

export default Person
