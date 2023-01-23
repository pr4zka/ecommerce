import axios from "axios";
                                                          
export const getMercaderias = async () => await axios.get("http://localhost:3000/mercaderias");
export const getMercaderia = async (id) => await axios.get(`http://localhost:3000/mercaderias/${id}`);
export const createMercaderia = async (mercaderia) => await axios.post("http://localhost:3000/mercaderias", mercaderia);
export const updateMercaderia = async (id, mercaderia) => await axios.put(`http://localhost:3000/mercaderias/${id}`, mercaderia);
export const deleteMercaderia = async (id) => await axios.delete(`htpp://localhost:3000/mercaderias/${id}`);
