import React from 'react'
import Person from './Person'

const Persons = ({persons, newFilter}) => {
  const contactsToShow = () =>
    persons.filter((person) => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      {contactsToShow().map((person) => (
        <Person key={person.id} person={person} />
      ))}
    </div>
  )
}

export default Persons
