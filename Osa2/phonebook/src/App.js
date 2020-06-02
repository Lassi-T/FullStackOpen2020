import React, { useState, useEffect } from 'react'

import Persons from './Components/Persons'
import Filter from './Components/Filter'
import ContactForm from './Components/ContactForm'
import personData from './Services/personData'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personData.getAll().then(initialPersons => {setPersons(initialPersons)})
  }, [])

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Filter newFilter={newFilter} onChange={handleFilterChange} />
      <h2>Add New</h2>
      <ContactForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewNumber={setNewNumber}
        setNewName={setNewNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} />
    </div>
  )
}

export default App
