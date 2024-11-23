import axios from 'axios'

const api = axios.create({
    baseURL:'http://localhoast:3000'
})

export default api