import React from 'react'
import personData from '../Services/personData'

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

    if (newName !== '' && newNumber !== '') {
      if (persons.some((person) => person.name === newName)) {
        if (window.confirm(`${newName} has already been added to the phonebook, 
            do you want to replace the old number?`)) {
          const person = persons.find((person) => person.name === newName)
          const changedPerson = { ...person, number: newNumber }
          personData.update(changedPerson).then(() => personData.getAll().then(setPersons))
        }
      } else {
        const contactObject = { name: newName, number: newNumber, id: persons.length + 1 }
        personData.createNew(contactObject).then((returnedPerson) => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setNewNumber('')
        })
      }
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
