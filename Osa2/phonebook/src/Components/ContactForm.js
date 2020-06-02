import React from 'react'
import personsData from '../Services/personData'

const ContactForm = ({
  persons,
  newName,
  newNumber,
  setPersons,
  setNewNumber,
  setNewName,
  handleNameChange,
  handleNumberChange,
}) => {
  const AddContact = (event) => {
    event.preventDefault()

    if (!persons.some((person) => person.name === newName)) {
      const contactObject = { name: newName, number: newNumber, id: persons.length + 1 }
      personsData.createNew(contactObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
      })
    } else {
      window.alert(`${newName} has already been added to the phonebook`)
    }
  }

  return (
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
  )
}

export default ContactForm
