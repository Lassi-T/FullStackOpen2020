import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', number: '040-1234567', id: 1 }])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(false)

  const handeFilterChange = (event) => {
    setNewFilter(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const AddContact = (event) => {
    event.preventDefault()

    console.log(persons)

    if (!persons.some((person) => person.name === newName)) {
      const contactObject = { name: newName, number: newNumber, id: persons.length + 1 }
      setPersons(persons.concat(contactObject))
      setNewNumber('')
      setNewName('')
    } else {
      window.alert(`${newName} has already been added to the phonebook`)
    }
  }

  const contactsToShow = () => persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h1>Phonebook</h1>
      <form>
        <div>
          filter: <input value={newFilter} onChange={handeFilterChange} />
        </div>
      </form>
      <h2>Add New</h2>
      <form onSubmit={AddContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {contactsToShow().map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </div>
    </div>
  )
}

export default App
