import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { styled } from "@mui/material/styles";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import PostAddIcon from "@mui/icons-material/PostAdd";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box, Container, Button } from "@mui/material";
import PdfPedidos from "../components/pdfViewer/PdfPedidos";
import { PedidosExel } from "../components/exelDownload/PedidosExel";

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

const columns = [
  { id: "name", label: "Name", minWidth: 170 },
  { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  {
    id: "population",
    label: "Population",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "size",
    label: "Size\u00a0(km\u00b2)",
    minWidth: 170,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "density",
    label: "Density",
    minWidth: 170,
    align: "right",
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData("India", "IN", 1324171354, 3287263),
  createData("China", "CN", 1403500365, 9596961),
  createData("Italy", "IT", 60483973, 301340),
  createData("United States", "US", 327167434, 9833520),
  createData("Canada", "CA", 37602103, 9984670),
  createData("Australia", "AU", 25475400, 7692024),
  createData("Germany", "DE", 83019200, 357578),
  createData("Ireland", "IE", 4857000, 70273),
  createData("Mexico", "MX", 126577691, 1972550),
  createData("Japan", "JP", 126317000, 377973),
  createData("France", "FR", 67022000, 640679),
  createData("United Kingdom", "GB", 67545757, 242495),
  createData("Russia", "RU", 146793744, 17098246),
  createData("Nigeria", "NG", 200962417, 923768),
  createData("Brazil", "BR", 210147125, 8515767),
];

const useStyles = makeStyles({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
  },
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

const CenteredHalfContainer = styled(Container)({
  maxWidth: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  margin: "auto",
  padding: "50px",
//   backgroundColor: "#D8D8DF",
  minHeight: "100vh",
  
});

export default function StickyHeadTable() {
  const classes = useStyles();
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
    <Paper className={classes.root}>
      <CenteredHalfContainer>
      <Box
        alignItems="center"
        justifyContent="center"
        maxWidth="md" // maxWidth="md"
        my={20}
      >
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
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
              {columns.map((row) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell align="justify">{row.id}</StyledTableCell>
                  <StyledTableCell align="justify">
                    {row.proveedorId}
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    {" "}
                    {row.usuarioId}
                  </StyledTableCell>
                  <StyledTableCell align="justify">{row.fecha}</StyledTableCell>
                  <StyledTableCell align="justify">
                    {row.observacion}
                  </StyledTableCell>
                  <StyledTableCell align="justify">
                    {row.estado}
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      navigate(`/edit/pedidos/${row.id}`);
                    }}
                  >
                    <EditIcon color="error" className="cursor-pointer" />
                  </StyledTableCell>
                  <StyledTableCell
                    onClick={() => {
                      deletePedido(row.id);
                    }}
                  >
                    <DeleteIcon color="error" className="cursor-pointer" />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           <Button variant="contained" color="success" sx={{margin: '5px'}}>
            <PedidosExel />
            exel
          </Button>
          <Button variant="contained" color="success" sx={{margin: '5px'}}>
            <PdfPedidos />
            pdf
          </Button>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      </CenteredHalfContainer>
    </Paper>
  );
}
