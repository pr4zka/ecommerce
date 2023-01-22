import e from "cors";
import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AddTaskEmpleados from "../components/AddTaskEmpleados";
import { useTasks } from "../context/TaskContext";

const Empleados = () => {
  const { empleados, getEmpleado, handleDeleteEmpleado } = useTasks();

  console.log(empleados);

  useEffect(() => {
   const res = getEmpleado();
    
  }, []);

  return (
    <>
      <div className="mt-12">
        <h1 className="text-center text-2xl uppercase">Mantener Empleados</h1>
        <div className="flex justify-center ml-7 pt-5">
          <div className="flex flex-row">
            <p className="text-xl hover:font-semibold mt-0.5">Agregar</p>
            <AddTaskEmpleados />
          </div>
          <div className="">
            <NavLink to="/">
              <p className="text-xl hover:font-semibold pr-12">Volver</p>
            </NavLink>
          </div>
        </div>
        <div className="rounded-lg border border-sky-100 h-auto w-3/5">
          <table className="border-collapse border-separate border-spacing-1 w-full border border-slate-500 ...">
            <thead>
              <tr>
                <th className="border border-slate-600 bg-emerald-400">
                  Nombre
                </th>
                <th className="border border-slate-600 bg-emerald-400">
                  Apellido
                </th>
                <th className="border border-slate-600 bg-emerald-400">Ci</th>
                <th className="border border-slate-600 bg-emerald-400">
                  Estado Civil
                </th>
                <th className="border border-slate-600 bg-emerald-400">
                  Nacionalidad
                </th>
                <th className="border border-slate-600 bg-emerald-400">
                  Ciudad
                </th>
                <th className="border border-slate-600 bg-emerald-400">
                  Estado
                </th>
                <th className="border border-slate-600 bg-emerald-400 hover:bg-slate-400 cursor-pointer">
                  Editar
                </th>
                <th className="border border-slate-600 bg-emerald-400 hover:bg-red-700 cursor-pointer">
                  Eliminar
                </th>
              </tr>
            </thead>
            <tbody>
              {empleados.map((employed) => (
                <tr key={employed.id}>
                  <td className="border border-slate-700">{employed.nombre}</td>
                  <td className="border border-slate-700">
                    {employed.apellido}
                  </td>
                  <td className="border border-slate-700">{employed.ci}</td>
                  <td className="border border-slate-700">
                    {employed.estadoCivil}
                  </td>
                  <td className="border border-slate-700">
                    {employed.nacionalidad}
                  </td>
                  <td className="border border-slate-700">{employed.ciudad}</td>
                  <td className="border border-slate-700">{employed.estado}</td>
                  <td className="border border-slate-700">
                    <button
                      onClick={() => {}}
                      className="hover:bg-slate-500 cursor-pointer"
                    >
                      Editar
                    </button>
                  </td>
                  <td className="border border-slate-700">
                    <button
                      className="hover:bg-red-500 cursor-pointer"
                      onClick={() => {
                        handleDeleteEmpleado(employed.id)
                      }}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Empleados;
