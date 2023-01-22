import axios from 'axios'


export const getEstadoCivil = async () => await axios.get('http://localhost:3000/estado');
export const createEstado =async (estadoCivil) => await axios.post('http://localhost:3000/estado', estadoCivil);
export const updateEstado =async (estadoCivil) => await axios.put('http://localhost:3000/estado', estadoCivil);
export const deleteEstado =async (id) => await axios.delete(`http://localhost:3000/estado/${id}`);