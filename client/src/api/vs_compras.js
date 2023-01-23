import axios from 'axios';

export const getCompras = () => axios.get('http://localhost:3000/compras');
export const getComprasById = (id) => axios.get(`http://localhost:3000/compras/${id}`);
export const createCompras = (data) => axios.post('http://localhost:3000/compras', data);
export const updateCompras = (id, data) => axios.put(`http://localhost:3000/compras/${id}`, data);
export const deleteCompras = (id) => axios.delete(`http://localhost:3000/compras/${id}`);
