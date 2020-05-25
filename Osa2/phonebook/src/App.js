import React, { useState } from 'react'
import Person from './Components/Person'

const App = () => {
  const [persons, setPersons] = useState([{ name: 'Arto Hellas', id: 1 }])
  const [newName, setNewName] = useState('')

  const handleNameChange = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value)
  }

  const AddContact = (event) => {
    event.preventDefault()
    //console.log('Add button clicked', event.target)
    console.log(persons.length + 1)
    const contactObject = {name: newName, id: persons.length + 1}
    setPersons(persons.concat(contactObject))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={AddContact}>
        <div>
          name: <input value={newName} onChange={handleNameChange} />
        </div>
        <div>
          <button type='submit'>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map((person) => (<Person key={person.id} person={person.name} />))}
      </div>
    </div>
  )
}

export default App
