import axios from "axios";

export const getMarcas = async () => await axios.get("http://localhost:3000/marcas");
export const createMarca = async (marca) => await axios.post("http://localhost:3000/marcas", marca);
export const updateMarca = async (marca) => await axios.put(`http://localhost:3000/marcas/${marca.id}`, marca);
export const deleteMarca = async (id) => await axios.delete(`http://localhost:3000/marcas/${id}`);
