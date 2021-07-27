import axios from 'axios'
const baseUrl = '/api/uploads'


const getFile = (id) => {
    const request = axios.get(`${baseUrl}/${id}`)
    return request.then(response => response.data)
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = newObject => {
  const config = {
    headers:{
        "Content-Type": 'multipart/form-data'
      }
    }
  const request = axios.post(baseUrl, newObject, config)
  return request.then(response => response.data)
}

export default {getFile, getAll, create}