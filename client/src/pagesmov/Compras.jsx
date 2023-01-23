
import AddTaskCompras from '../components/AddTaskCompras';
import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTasks } from "../context/TaskContext";
import { useEffect } from 'react';


const Compras = () => {

  const { getCompra, compras, handleDeleteCompra} =  useTasks();

    useEffect(() => {
      getCompra();
    }, []);

  return (
    <>
     <div className="mt-12">
            <h1 className="text-center text-2xl">COMPRAS A MANTENER</h1>
            <div className="flex justify-center ml-7 pt-5 ">
                <div className="flex flex-row">
                    <p className="text-xl hover:font-semibold mt-0.5">Agregar</p>
                    <AddTaskCompras />
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
                        <th className="border-slate-600 bg-emerald-400">Sucursal</th>
                        <th className="border-slate-600 bg-emerald-400">Proveedor</th>
                        <th className="border-slate-600 bg-emerald-400">Fecha</th>
                        <th className="border-slate-600 bg-emerald-400">Total</th>
                        <th className="border-slate-600 bg-emerald-400">Estado</th>
                        <th className="border-slate-600 bg-emerald-400 hover:bg-slate-400 cursor-pointer">
                            Editar
                        </th>
                        <th className="rounded-tr-lg border-slate-600 bg-emerald-400 hover:bg-red-700 cursor-pointer">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {compras.map((items) => (
                        <tr key={items.id}>
                            <td className="border pl-2 border-r-indigo-500 border-l-indigo-500">{items.id}</td>
                            <td className="border pl-2 border-r-indigo-500">{items.sucursal}</td>
                            <td className="border pl-2 border-r-indigo-500">{items.proveedor}</td>
                            <td className="border pl-2 border-r-indigo-500">{items.fecha}</td>
                            <td className="border pl-2 border-r-indigo-500">{items.total}</td>
                            <td className="border pl-2 border-r-indigo-500">{items.estado}</td>
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
                                    handleDeleteCompra(items.id);
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
  )
}

export default Compras