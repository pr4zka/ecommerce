import * as React from "react";
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
import { Box } from "@material-ui/core";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein, estado) {
  return { name, calories, fat, carbs, protein, estado };
}

const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0, "Pendiente"),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3, "Pendiente"),
  createData("Eclair", 262, 16.0, 24, 6.0, "Pendiente"),
  createData("Cupcake", 305, 3.7, 67, 4.3, "Pendiente"),
  createData("Gingerbread", 356, 16.0, 49, 3.9, "Pendiente"),
];

export default function CustomizedTables() {
  return (
    <Box>
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
              {/* <StyledTableCell align="justify">Imprimir</StyledTableCell>
            <StyledTableCell align="justify">Descargar Exel</StyledTableCell> */}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.name}>
                <StyledTableCell component="th" scope="row">
                  {row.name}{" "}
                </StyledTableCell>
                <StyledTableCell align="justify">
                  {row.calories}
                </StyledTableCell>
                <StyledTableCell align="justify">{row.fat}</StyledTableCell>
                <StyledTableCell align="justify">{row.carbs}</StyledTableCell>
                <StyledTableCell align="justify">{row.protein}</StyledTableCell>
                <StyledTableCell align="justify">{row.estado}</StyledTableCell>
                <PostAddIcon color="primary" className="cursor-pointer" />
                <EditIcon color="secondary" className="cursor-pointer" />
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <StyledTableCell align="justify">Imprimir</StyledTableCell>
      <StyledTableCell align="justify">Descargar Exel</StyledTableCell>
    </Box>
  );
}
