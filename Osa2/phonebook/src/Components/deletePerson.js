import personData from '../Services/personData'

const deletePerson = (person, setPersons) => {
  if (window.confirm(`Do you relly wan't to delete ${person.name}`)) {
    personData.deletePerson(person).then(() => personData.getAll().then(setPersons))
  }
}

export default deletePerson
