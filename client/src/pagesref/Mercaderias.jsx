import React from 'react'
import { NavLink } from 'react-router-dom';
import { useTasks } from "../context/TaskContext";
import { useEffect } from 'react';
import AddTaskMercaderias from '../components/AddTaskMercaderias';


const Mercaderias = () => {
    
    const {mercaderias, getMercaderia } =  useTasks();

    useEffect(() => {
      getMercaderia();
    }, []);

    return (
        <>
           <div className="mt-12">
            <h1 className="text-center text-2xl">MARCAS A MANTENER</h1>
            <div className="flex justify-center ml-7 pt-5 ">
                <div className="flex flex-row">
                    <p className="text-xl hover:font-semibold mt-0.5">Agregar</p>
                    <AddTaskMercaderias />
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
                        <th className="border-slate-600 bg-emerald-400"> Tipo Impuesto </th>
                        <th className="border-slate-600 bg-emerald-400"> Descripcion </th>
                        <th className="border-slate-600 bg-emerald-400"> Precio Compra </th>
                        <th className="border-slate-600 bg-emerald-400"> Precio Venta </th>
                        <th className="border-slate-600 bg-emerald-400 hover:bg-slate-400 cursor-pointer">
                            Editar
                        </th>
                        <th className="rounded-tr-lg border-slate-600 bg-emerald-400 hover:bg-red-700 cursor-pointer">
                            Eliminar
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {mercaderias.map((mercaderia) => (
                        <tr key={mercaderia.id}>
                            <td className="border pl-2 border-r-indigo-500 border-l-indigo-500">{mercaderia.id}</td>
                            <td className="border pl-2 border-r-indigo-500">{mercaderia.idtipoimpuesto}</td>
                            <td className="border pl-2 border-r-indigo-500">{mercaderia.descripcion}</td>
                            <td className="border pl-2 border-r-indigo-500">{mercaderia.preciocompra}</td>
                            <td className="border pl-2 border-r-indigo-500">{mercaderia.precioventa}</td>
                            <td className="border pl-2 border-r-indigo-500">{mercaderia.estado}</td>
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
                                  console.log(mercaderia.id)
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

export default Mercaderias