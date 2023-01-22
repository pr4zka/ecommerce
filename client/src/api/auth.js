import axios from '../libs/axios'


export const login = async (data) => await axios.post('/login', data)
export const register = async (data) => await axios.post('/register', data)
export const profileReques = async () => await axios.get('/profile')
