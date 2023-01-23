import axios from 'axios';

export const getAjusteMantener = async () => await axios.get("http://localhost:3000/ajuste_mantener");
export const createAjusteMantener = async (newAjusteMantener) => await axios.post("http://localhost:3000/ajuste_mantener", newAjusteMantener);
export const updateAjusteMantener = async (id, updatedAjusteMantener) => await axios.put(`http://localhost:3000/ajuste_mantener/${id}`, updatedAjusteMantener);
export const deleteAjusteMantener = async (id) => await axios.delete(`http://localhost:3000/ajuste_mantener/${id}`);