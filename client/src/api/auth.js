import axios from 'axios'


export const register = async (data) => await axios.post('http://localhost:4000/register', data)