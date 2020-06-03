import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
  return axios.get(baseUrl).then((response) => response.data)
}

const createNew = (newObject) => {
  return axios.post(baseUrl, newObject).then((response) => response.data)
}

const update = (object) => {
  return axios.put(`${baseUrl}/${object.id}`, object).then((response) => response.data)
}

const deletePerson = (object) => {
  return axios.delete(`${baseUrl}/${object.id}`).then((response) => response.data)
}

export default {
  getAll,
  createNew,
  update,
  deletePerson,
}
