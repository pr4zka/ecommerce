import { createContext, useContext, useState } from "react";
import { getAllCargos, deleteCargo, createCargo } from "../api/cargos";
import { getEmpleados, deleteEmpleado, createEmpleado } from "../api/empleados";
import { getCiudades, deleteCiudad, createCiudad } from "../api/ciudades";
import { createEstado, getEstadoCivil, deleteEstado } from "../api/estadoCivil";
import { createMarca, getMarcas, deleteMarca } from "../api/marcas";

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
  const createEmpleados = async (values) => {
    try {
      const res = await createEmpleado(values);
      setEmpleado([...empleados, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getEmpleado() {
    const response = await getEmpleados();
    setEmpleado(response.data.data);
  }

  const handleDeleteEmpleado = async (id) => {
    try {
      await deleteEmpleado(id);
      setEmpleado(empleados.filter((empleado) => empleado.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //ciudades
  const [ciudades, setCiudad] = useState([]);
  const [idCiudad, setId] = useState("");

  const createCiudades = async (values) => {
    try {
      const res = await createCiudad(values);
      setCiudad([...ciudades, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getCiudad() {
    const response = await getCiudades();
    setId(response.data.data[response.data.data.length - 1].id + 1);
    setCiudad(response.data.data);
  }
  //estadoCivil
  const [estadoCivil, setEstadoCivil] = useState([]);
  const [idEstadoCivil, setIdEstadoCivil] = useState([]);

  const createEstadoCivil = async (values) => {
    try {
      const res = await createEstado(values);
      setEstadoCivil([...estadoCivil, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getEstado() {
    const response = await getEstadoCivil();
    setIdEstadoCivil(response.data.data[response.data.data.length - 1].id + 1);
    setEstadoCivil(response.data.data);
  }

  const handleDeleteEstadoCivil = async (id) => {
    try {
      await deleteEstado(id);
      setEstadoCivil(estadoCivil.filter((estado) => estado.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //marcas
  const [marcas, setMarca] = useState([]);
  const [idMarca, setIdMarca] = useState([]);

  const createMarcas = async (values) => {
    try {
      const res = await createMarca(values);
      setMarca([...marcas, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getMarca() {
    const response = await getMarcas();
    if (response.data.data.length > 0) {
      setIdMarca(response.data.data[response.data.data.length - 1].id + 1);
    } else {
      setIdMarca(1);
    }
    setMarca(response.data.data);
  }
  const handleDeleteMarca = async (id) => {
    try {
      await deleteMarca(id);
      setMarca(marcas.filter((marca) => marca.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getCargos,
        handleDelete,
        createCargos,
        empleados,
        getEmpleado,
        handleDeleteEmpleado,
        createEmpleados,
        createCiudades,
        getCiudad,
        ciudades,
        idCiudad,
        createEstadoCivil,
        getEstado,
        estadoCivil,
        idEstadoCivil,
        handleDeleteEstadoCivil,
        createMarcas,
        getMarca,
        marcas,
        idMarca,
        handleDeleteMarca,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
