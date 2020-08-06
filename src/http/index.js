import axios from   'axios'

const http = axios.create({
    baseURL: 'http://localhost:8000/',
    headers: {
        'Accept': 'application/json',
        'Content': 'application/json',
    }
})

// Adiociona a todas as requisições o token de acesso
http.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default http;