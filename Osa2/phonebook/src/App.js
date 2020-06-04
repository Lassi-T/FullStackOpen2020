import React, { useState, useEffect } from 'react'

import Persons from './Components/Persons'
import Filter from './Components/Filter'
import ContactForm from './Components/ContactForm'
import personData from './Services/personData'
import Notification from './Components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)

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
      <Notification message={message}/>
      <ContactForm
        persons={persons}
        newName={newName}
        newNumber={newNumber}
        setPersons={setPersons}
        setNewNumber={setNewNumber}
        setNewName={setNewName}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        message={message}
        setMessage={setMessage}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} setPersons={setPersons} />
    </div>
  )
}

export default App
