import React from 'react'

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
