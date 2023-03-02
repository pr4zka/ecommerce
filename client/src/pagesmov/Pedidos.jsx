import { useNavigate } from "react-router-dom";
import { useTasks } from "../context/TaskContext";
import { useEffect } from "react";
import * as React from "react";
import PdfPedidos from "../components/pdfViewer/PdfPedidos";
import { PedidosExel } from "../components/exelDownload/PedidosExel";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EditIcon from "@mui/icons-material/Edit";
import { Box, Container, Button, Hidden } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import TablePagination from "@material-ui/core/TablePagination";

const Pedidos = () => {
  const navigate = useNavigate();
  const { getPedidos, deletePedido, pedidos, showNotification } = useTasks();

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    fontSize: 16,
    fontWeight: "bold",
    letterSpacing: 5,
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)",
    padding: 10,
    textAlign: "center", // Centrar en el medio horizontal
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 13,
  },
}));




const CenteredHalfContainer = styled(Container)({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: "50px",
  minHeight: "100vh",
  
});

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));



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
    <CenteredHalfContainer>
      <Box
        // alignItems="center"
        // height="100%"
        // overflow="hidden"
        // justifyContent="center"
        // maxWidth="md" // maxWidth="md"
        // my={20} 
      >
      <h1 className="text-center text-3xl mb-8 truncate">Formulario Pedidos</h1>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700}} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell align="justify">Codigo</StyledTableCell>
                <StyledTableCell align="justify">Proveedor</StyledTableCell>
                <StyledTableCell align="justify">Usuario</StyledTableCell>
                <StyledTableCell align="justify">Fecha</StyledTableCell>
                <StyledTableCell align="justify">Observacion</StyledTableCell>
                <StyledTableCell align="justify">Estado</StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
                <StyledTableCell align="justify"></StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {pedidos.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="justify">{row.id}</StyledTableCell>
                  <StyledTableCell align="justify">{row.proveedorId}</StyledTableCell>
                  <StyledTableCell align="justify"> {row.usuarioId}</StyledTableCell>
                  <StyledTableCell align="justify">{row.fecha}</StyledTableCell>
                  <StyledTableCell align="justify">{row.observacion}</StyledTableCell>
                  <StyledTableCell align="justify">{row.estado}</StyledTableCell>
                  <StyledTableCell onClick={() => {
                    navigate(`/edit/pedidos/${row.id}`)
                  }}
                  ><EditIcon color="info" className="cursor-pointer"/></StyledTableCell>
                    <StyledTableCell onClick={() => {
                    deletePedido(row.id);
                 }}
                 ><DeleteIcon color="error" className="cursor-pointer"/></StyledTableCell>
                 </StyledTableRow>        
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           <Button variant="contained" color="primary" sx={{ mr: 1, marginTop: '20px' }}>
            <PdfPedidos />
          </Button> 
          <Button variant="contained" color="success" sx={{mr: 1, marginTop: '20px'}}>
            <PedidosExel />
          </Button> 
           <Button variant="contained" color="inherit" style={{ position: 'absolute', right: '490px', marginTop: '20px' }} onClick={() => {
              navigate("/new/pedido")
          }}>
          <PostAddIcon color="primary" className="cursor-pointer w-20"/>
          </Button>
          <Button variant="contained" color="inherit" style={{ position: 'absolute', right: '390px',  marginTop: '20px'}} onClick={() => {
             navigate("/")
          }}>
            Volver
          </Button>
            {/* <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          // rowsPerPage={rowsPerPage}
          // page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        /> */}
      </Box>
    </CenteredHalfContainer>
    )
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
