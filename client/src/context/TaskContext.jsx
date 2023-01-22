import { createContext, useContext, useState } from "react";
import { getAllCargos, deleteCargo, createCargo } from "../api/cargos";

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

  return <TaskContext.Provider value={{tasks, getCargos, handleDelete, createCargos}}>{children}</TaskContext.Provider>;
};
