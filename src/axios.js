import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:5001/e-commerce-c8ec0/us-central1/api' // apı url
})

export default instance