import axios from 'axios';
// https://sujeitoprogramador.com/ (BASE URL)
// https://sujeitoprogramador.com/r-api/?api=filmes/ (GET ALL)
// https://sujeitoprogramador.com/r-api/?api=filmes/:133 (GET ID)

const api = axios.create({
    baseURL: 'https://sujeitoprogramador.com'
})

export default api;