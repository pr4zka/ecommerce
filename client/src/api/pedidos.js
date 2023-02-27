import axios from 'axios';

export const createPedidos = async(pedidos) =>  axios.post('http://localhost:4000/pedidos', pedidos);
export const getAllPedidos = async () => await axios.get('http://localhost:4000/pedidos');
export const getPedidosById = async (id) => await axios.get(`http://localhost:4000/pedidos/${id}`);
export const updatePedidos = async (id, pedidos) => await axios.patch(`http://localhost:4000/pedidos/${id}`, pedidos);
export const deletePedidos = async (id) => await axios.delete(`http://localhost:4000/pedidos/${id}`);