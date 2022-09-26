import axios from 'axios'

const api = axios.create({
  baseURL: 'https://megasonho-hackathon.herokuapp.com'
})

export default api
