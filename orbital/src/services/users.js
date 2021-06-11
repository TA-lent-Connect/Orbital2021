import axios from 'axios'
const baseUrl = '/api/users'

const create = async newUser => {
    const request = axios.post(baseUrl, newUser)
    return request.then(response => response.data)
}

export default { create }