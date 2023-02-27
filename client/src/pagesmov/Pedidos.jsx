import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import { NavLink, useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";
import PdfPedidos from "../components/pdfViewer/PdfPedidos";
import { PedidosExel } from "../components/exelDownload/PedidosExel";

const Pedidos = () => {
  const navigate = useNavigate();
  const { getPedidos, deletePedido, pedidos, showNotification } = useTasks();

  const columns = [
    {
      id: "codigo",
      label: "Codigo",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "proveedor",
      label: "Proveedor",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "usuario",
      label: "Usuario",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "fecha",
      label: "Pedido Fecha",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "observacion",
      label: "Ped_observacion",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
    {
      id: "estado",
      label: "Estado Pedido",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];



  const useStyles = makeStyles({
    root: {
      width: "100%",
    },
    container: {
      maxHeight: 440,
    },
  });

  useEffect(() => {
    getPedidos();
  }, []);

  // const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper >
      <TableContainer >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.id}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
          
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
};

export default Pedidos;
{
  /* <div className="mt-12">
        <h1 className="text-center text-2xl">PEDIDOS A MANTENER</h1>
        <div className="flex justify-center ml-7 pt-5 ">
          <div className="flex flex-row">
            <p
              className="text-xl hover:bg-green-500 rounded-lg mt-0.5 cursor-pointer"
              onClick={() => {
                navigate("/new/pedido");
              }}
            >
              Agregar
            </p>
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
              <th className="rounded-tl-lg border-slate-600 bg-emerald-400">
                Proveedor
              </th>
              <th className="border-slate-600 bg-emerald-400">Usuario</th>
              <th className="border-slate-600 bg-emerald-400">Pedido Fecha</th>
              <th className="border-slate-600 bg-emerald-400">
                Ped_obersvacion
              </th>
              <th className="border-slate-600 bg-emerald-400">Estado Pedido</th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-slate-400 cursor-pointer">
                Editar
              </th>
              <th className="rounded-tr-lg border-slate-600 bg-emerald-400 hover:bg-red-700 cursor-pointer">
                Eliminar
              </th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-green-600 cursor-pointer rounded-full">
                <PdfPedidos />
              </th>
              <th className="border-slate-600 bg-emerald-400 hover:bg-green-600 cursor-pointer rounded-full">
                 <PedidosExel />
              </th>
            </tr>
          </thead>
          <tbody>
            
                    
            {pedidos.map((ped) => (
                         <tr key={ped.id}>
                            <td className="border pl-2 border-r-indigo-500 border-l-indigo-500">{ped.id}</td>
                            <td className="border pl-2 border-r-indigo-500 border-l-indigo-500">{ped.proveedorId}</td>
                            <td className="border pl-2 border-r-indigo-500">{ped.usuarioId}</td>
                            <td className="border pl-2 border-r-indigo-500">{ped.fecha}</td>
                            <td className="border pl-2 border-r-indigo-500">{ped.observacion}</td>
                            <td className="border pl-2 border-r-indigo-500">{ped.estado}</td>
                            <td className="border pl-2 border-r-indigo-500">
                                <button
                                    onClick={() => {
                                       navigate(`/edit/pedidos/${ped.id}`);
                                    }}
                                    className="hover:bg-slate-500 cursor-pointer"
                                >

                                    Editar
                                </button>
                            </td>
                            <td className="pl-2">
                                <button className="hover:bg-red-500 cursor-pointer" onClick={() => {
                                     deletePedido(ped.id);
                                     showNotification.warning("Pedido Eliminado");
                                }}>
                                    Eliminar
                                </button>
                            </td>
                        </tr> 
                     ))} 
          </tbody>
        </table>
      </div> */
}
