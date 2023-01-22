import axios from "axios";

export const createEmpleado = async (data) => await axios.post("http://localhost:3000/empleados", data)
export const getEmpleados = async () => await axios.get("http://localhost:3000/empleados")
export const getEmpleado = async (id) => await axios.get(`http://localhost:3000/empleados/${id}`)
export const updateEmpleado = async (id, data) => await axios.put(`http://localhost:3000/empleados/${id}`, data)
export const deleteEmpleado = async (id) => await axios.delete(`http://localhost:3000/empleados/${id}`)