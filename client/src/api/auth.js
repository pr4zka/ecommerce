import axios from '../libs/axios'


export const login = async (data) => await axios.post('/login', data).then(res => res.data).catch(err => err.response)
export const register = async (data) => await axios.post('/register', data)
export const profileReques = async () => await axios.get('/profile')
