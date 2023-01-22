import axios from "axios";

export const getCiudades = async () => await axios.get("http://localhost:3000/ciudades");
export const createCiudad = async (ciudad) => await axios.post("http://localhost:3000/ciudades", ciudad);
export const updateCiudad = async (ciudad) => await axios.put(`http://localhost:3000/ciudades/${ciudad.id}`, ciudad);
export const deleteCiudad = async (id) => await axios.delete(`http://localhost:3000/ciudades/${id}`);
