import { NavLink } from "react-router-dom";
import { useState, useContext } from "react";
import AddTaskCargos from "../components/AddTaskCargos";
import { useEffect } from "react";
import {useTasks} from "../context/TaskContext";




export const Cargos = () => {
  
  
  const { tasks, getCargos, handleDelete } =  useTasks();

 

  useEffect(() => {
    getCargos();
  }, []);

  return (
    <>
      <div className="mt-12">
        <h1 className="text-center text-2xl">CARGOS A MANTENER</h1>
        <div className="flex justify-center ml-7 pt-5 ">
          <div className="flex flex-row">
            <p className="text-xl hover:font-semibold mt-0.5">Agregar</p>
            <AddTaskCargos/>
          </div>
          <div className="">
            <NavLink to="/">
              <p className="text-xl hover:font-semibold pr-12">Volver</p>
            </NavLink>
          </div>
        </div>
        <table className="w-4/6 table-auto">
          <thead>
            <tr>
              <th className="rounded-tl-lg border-slate-600 bg-emerald-400">Codigo</th>
              <th className="border-slate-600 bg-emerald-400">
                Descripcion
              </th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-slate-400 cursor-pointer">
                Editar
              </th>
              <th className="rounded-tr-lg border-slate-600 bg-emerald-400 hover:bg-red-700 cursor-pointer">
                Eliminar
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks.map((task) => (
              <tr key={task.id}>
                <td className="border pl-2 border-r-indigo-500 border-l-indigo-500">{task.id}</td>
                <td className="border pl-2 border-r-indigo-500">{task.descripcion}</td>
                <td className="border pl-2 border-r-indigo-500">
                  <button
                    onClick={() => {
                   
                    }}
                    className="hover:bg-slate-500 cursor-pointer"
                  >
                    Editar
                  </button>
                </td>
                <td className="pl-2">
                  <button className="hover:bg-red-500 cursor-pointer" onClick={() => {
                    handleDelete(task.id);
                  }}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default Cargos;
