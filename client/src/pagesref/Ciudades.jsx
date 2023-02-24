import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import AddTaskCiudades from "../components/AddTaskCiudades";
import { useEffect } from "react";
import PdfCiudades from "../components/pdfViewer/PdfCiudades";
import CiudadesForm from "./CiuadesForm";

const Ciudades = () => {
  const { getCiudad, ciudades, deleteCiudades } = useTasks();
   const navigate = useNavigate()


  useEffect(() => {
    getCiudad();
  }, []);

  return (
    <>
      <div className="mt-12">
        <h1 className="text-center text-2xl">CIUDADES A MANTENER</h1>
        <div className="flex justify-center ml-7 pt-5 ">
          <div className="flex flex-row">
            <p className="text-xl hover:font-semibold mt-0.5 cursor-pointer" onClick={() => {
              navigate("/new/ciudades");
            }}>Agregar</p>

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
              <th className="rounded-tl-lg border-slate-600 bg-emerald-400">
                Codigo
              </th>
              <th className="border-slate-600 bg-emerald-400">Descripcion</th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-slate-400 cursor-pointer">
                Editar
              </th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-red-700 cursor-pointer">
                Eliminar
              </th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-green-600 cursor-pointer rounded-full">
                <PdfCiudades />
              </th>
            </tr>
          </thead>
          <tbody>
            {ciudades.map((ciudad) => (
              <tr key={ciudad.Ciu_id}>
                <td className="border pl-2 border-r-indigo-500 border-l-indigo-500">
                  {ciudad.Ciu_id}
                </td>
                <td className="border pl-2 border-r-indigo-500">
                  {ciudad.Ciu_descripcion}
                </td>
                <td className="border pl-2 border-r-indigo-500">
                  <button
                    onClick={() => {
                      navigate(`/edit/ciudades/${ciudad.Ciu_id}`)
                    }}
                    className="hover:bg-slate-500 cursor-pointer h-14"
                  >
                    Edit
                  </button>
                </td>
                <td className="pl-2">
                  <button
                    className="hover:bg-red-500 cursor-pointer"
                    onClick={() => {
                       deleteCiudades(ciudad.Ciu_id);
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
    </>
  );
};

export default Ciudades;
