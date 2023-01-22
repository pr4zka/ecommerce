import axios from "axios";

export const createEmpleado = async (data) => await axios.post("http://localhost:3000/empleados", data)
export const getEmpleados = async () => await axios.get("http://localhost:3000/empleados")