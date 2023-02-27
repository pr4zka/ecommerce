import axios from 'axios';

export const createCargo = async(cargo) =>  axios.post('http://localhost:3000/cargos', cargo);
export const getAllCargos = async () => await axios.get('http://localhost:3000/cargos');
export const getCargoById = async (id) => await axios.get(`http://localhost:3000/cargos/${id}`);
export const updateCargo = async (id, cargo) => await axios.put(`http://localhost:3000/cargos/${id}`, cargo);
export const deleteCargo = async (id) => await axios.delete(`http://localhost:3000/cargos/${id}`);