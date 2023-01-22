import { createContext, useContext, useState } from "react";
import { getAllCargos, deleteCargo, createCargo } from "../api/cargos";
import { getEmpleados } from "../api/empleados";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [empleados, setEmpleado] = useState([]);

  async function getCargos() {
    const response = await getAllCargos();
    setTasks(response.data.data);
  }

  const handleDelete = async (id) => {
    try {
      await deleteCargo(id);
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const createCargos = async (values) => {
    try {
      const res = await createCargo(values);
      setTasks([...tasks, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };
  //empleados
  async function getEmpleado (){
    const response = await getEmpleados();
    setEmpleado(response.data.data);
  };

  return (
    <TaskContext.Provider
      value={{ tasks, getCargos, handleDelete, createCargos, empleados, getEmpleado }}
    >
      {children}
    </TaskContext.Provider>
  );
};
