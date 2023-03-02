import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createContext, useContext, useEffect, useState } from "react";
import { getAllCargos, deleteCargo, createCargo } from "../api/cargos";
import { getEmpleados, deleteEmpleado, createEmpleado } from "../api/empleados";
import {
  getCiudades,
  deleteCiudad,
  createCiudad,
  updateCiudad,
  getCiudadById,
} from "../api/ciudades";
import { createEstado, getEstadoCivil, deleteEstado } from "../api/estadoCivil";
import { createMarca, getMarcas, deleteMarca } from "../api/marcas";
import {
  createAjusteMantener,
  getAjusteMantener,
  deleteAjusteMantener,
} from "../api/ajustaMantener";
import {
  createCompras,
  getCompras,
  deleteCompras,
  getComprasById,
  updateCompras,
} from "../api/compras";
import {
  getAllPedidos,
  getPedidosById,
  createPedidos,
  deletePedidos,
  updatePedidos,
} from "../api/pedidos";

import {
  createMercaderia,
  getMercaderias,
  updateMercaderia,
  deleteMercaderia,
} from "../api/mercaderias";

export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error("useTasks must be used within a TaskContextProvider");
  }
  return context;
};

export const TaskContextProvider = ({ children }) => {
  
  const showNotification = {
    success: (message) => {
      toast.success(message);
    },
    error: (message) => {
      toast.error(message);
    },
    warning: (message) => {
      toast.warning(message);
    },
    info: (message) => {
      toast.info(message);
    },
  };

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
  const [idCiudad, setCiudadId] = useState(0);

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
    setCiudadId(response.data.data[response.data.data.length - 1].Ciu_id + 1);
    setCiudad(response.data.data);
  }

  async function getCiuadadId(id) {
    const response = await getCiudadById(id);
    return response.data.data;
  }
  async function deleteCiudades(id) {
    try {
      await deleteCiudad(id);
      setCiudad(ciudades.filter((ciudad) => ciudad.Ciu_id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCiudades(id, values) {
    try {
      const res = await updateCiudad(id, values);
      console.log("actualizado", res);
      // setCiudad(ciudades.filter((ciudad) => ciudad.Ciu_id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  //estadoCivil
  const [estadoCivil, setEstadoCivil] = useState([]);
  const [idEstadoCivil, setIdEstadoCivil] = useState(null);

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
  //mercaderias
  const [mercaderias, setMercaderia] = useState([]);
  const [idMercaderia, setIdMercaderia] = useState([]);

  const createMercaderias = async (values) => {
    try {
      console.log(values);
      const res = await createMercaderia(values);
      console.log(res);
      setMercaderia([...mercaderias, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getMercaderia() {
    const response = await getMercaderias();
    if (response.data.data.length > 0) {
      setIdMercaderia(response.data.data[response.data.data.length - 1].id + 1);
    } else {
      setIdMercaderia(1);
    }
    setMercaderia(response.data.data);
  }
  const handleDeleteMercaderia = async (id) => {
    try {
      await deleteMercaderia(id);
      setMercaderia(mercaderias.filter((mercaderia) => mercaderia.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  //ajuste mantener
  const [ajustes, setAjuste] = useState([]);
  const [idAjuste, setIdAjuste] = useState([]);

  const createAjuste_Mantener = async (values) => {
    try {
      const res = await createAjusteMantener(values);
      setAjuste([...ajustes, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getAjuste() {
    const response = await getAjusteMantener();
    if (response.data.data.length > 0) {
      setIdAjuste(response.data.data[response.data.data.length - 1].id + 1);
    } else {
      setIdAjuste(1);
    }
    setAjuste(response.data.data);
  }
  const handleDeleteAjuste = async (id) => {
    try {
      await deleteAjusteMantener(id);
      setAjuste(ajustes.filter((ajuste) => ajuste.id !== id));
    } catch (error) {
      console.log(error);
    }
  };
  //compras
  const [compras, setCompra] = useState([]);

  const createCompra = async (values) => {
    try {
      const res = await createCompras(values);
      setCompra([...compras, res.data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  async function getCompra() {
      try {
         const response = await getCompras();
          if(Array.isArray(response.data.data)){
            const nuevasCompras = response.data.data.map((compras) => ({
              id: compras.Com_id,
              pedido: compras.Ped.Ped_Id,
              proveedor: compras.Ped.Pro.razonsocial,
              sucursal: compras.Suc.descripcion,
              usuario: compras.U.usuario,
              fecha: new Date(compras.fecha).toLocaleDateString(),
              tipoComprobante: compras.tip_comprobante,
              serComprobante: compras.ser_compronbante,
              numeroFactura: compras.nro_factura,
              observacion: compras.observacion,
              total: compras.total,
              totalExenta: compras.totalexenta,
              totaliva5: compras.titaliva5,
              totaliva10: compras.totaliva10,
              estado: compras.estado
            }))
            setCompra(nuevasCompras);
          }
      } catch (error) {
        console.log(error)
      }  
  }
  const handleDeleteCompra = async (id) => {
    try {
      await deleteCompras(id);
      setCompra(compras.filter((compra) => compra.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const getCompraById = async (id) => {
    try {
      const response = await getComprasById(id);
      return response.data.data;
    } catch (error) {
      console.log(error);
    }
  }

  //pedidos
  const [pedidos, setPedido] = useState([]);

  async function createPedido(values) {
    console.log("TaskContext", values);
    try {
      await createPedidos(values);
    } catch (error) {
      console.log(error);
    }
  }

  async function getPedidos() {
    try {
      const response = await getAllPedidos();
      if (Array.isArray(response.data.data)) {
        const nuevosPedidos = response.data.data.map((pedido) => ({
          id: pedido.Ped_Id,
          proveedorId: pedido.Pro.razonsocial,
          usuarioId: pedido.U.usuario,
          fecha: new Date(pedido.Ped_fecha).toLocaleDateString(),
          observacion: pedido.Ped_observacion,
          estado: pedido.Ped_estado,
        }));
        setPedido(nuevosPedidos);
      }
    } catch (error) {
      console.error("Error al obtener los datos de pedidos", error);
    }
  }

  async function getPedido(id) {
    try {
      const response = await getPedidosById(id);
      return response.data.data;
    } catch (error) {
      console.error("Error al obtener los datos de pedidos", error);
    }
  }

  async function updatePedido(id, values) {
    try {
      await updatePedidos(id, values);
    } catch (error) {
      console.log(error);
    }
  }

  async function deletePedido(id) {
    try {
      await deletePedidos(id);
      setPedido(pedidos.filter((pedido) => pedido.id !== id));
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <TaskContext.Provider
      value={{
        showNotification,
        //pedidos
        createPedido,
        updatePedido,
        getPedidos,
        getPedido,
        pedidos,
        deletePedido,

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
        getCiuadadId,
        ciudades,
        deleteCiudades,
        updateCiudades,
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
        createMercaderias,
        getMercaderia,
        mercaderias,
        idMercaderia,
        handleDeleteMercaderia,
        //ajuste mantener
        createAjuste_Mantener,
        getAjuste,
        deleteAjusteMantener,
        ajustes,
        idAjuste,
        handleDeleteAjuste,
        //compras
        createCompra,
        getCompra,
        deleteCompras,
        compras,
        getCompraById,
        handleDeleteCompra,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
