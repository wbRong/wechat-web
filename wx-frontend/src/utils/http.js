import axios from 'axios'

// console.log(import.meta.env.BASE_URL)

const http = axios.create({
  baseURL: 'http://127.0.0.1:5000/v1', 
  timeout: 10000
})

export default http
