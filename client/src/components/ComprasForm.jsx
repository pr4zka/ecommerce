import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@mui/material";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import { useFormik } from "formik";
import * as React from "react";

function ComprasForm() {
  const profile = useAuthStore((state) => state.profile);
  const usuario = profile.msg.split(" ")[1];

  const { getCompraById, showNotification } = useTasks();

  const [compra, setCompra] = useState({
    Us_id: usuario,
    Ped_Id: "",
    Suc_Id: "",
    fecha: new Date().toLocaleDateString("en-CA", {
      timeZone: "America/Asuncion",
    }),
    tip_comprobante: "",
    nro_factura: "",
    observacion: "",
    total: "",
    total_exenta: "",
    totalIva5: "",
    totalIva10: "",
    estado: "",
  });

  const params = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: compra,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: "center",
    width: "90%",
    // margin: theme.spacing(1),
    color: theme.palette.text.secondary,
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

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const ped = await getCompraById(params.id);
        console.log("pedidos", ped);
        setCompra({
          Suc_Id: ped.Suc.Suc_id,
          Us_id: ped.Us_id,
          Ped_Id: ped.Ped_Id,
          fecha: new Date(ped.fecha).toLocaleDateString("en-CA", {
            timeZone: "America/Asuncion",
          }),
          tip_comprobante: ped.tip_comprobante,
          nro_factura: ped.nro_factura,
          observacion: ped.observacion,
          total: ped.total,
          total_exenta: ped.totalexenta,
          totalIva5: ped.titaliva5,
          totalIva10: ped.totaliva10,
          estado: ped.estado,
        });
      }
    };
    loadTask();
  }, []);

  return (
    // <Box noValidate autoComplete="off">
    <React.Fragment>
      <form onSubmit={formik.handleSubmit}>
        <CenteredHalfContainer>
          <ToastContainer />

          <h1 className="text-xl font-bold uppercase m-2">
            {params.id ? "Editar Compras" : "Crear Compras"}
          </h1>
          <Box
            sx={{
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {/* <Grid
              container
              spacing={{ xs: 2, md: 1 }}
              columns={{ xs: 2, sm: 3, md: 12 }}
            > */}
              {/* <Grid item xs={1} sm={2} md={4}> */}
                <label htmlFor="firstName">First Name</label>
                <input
                  id="firstName"
                  name="Suc_Id"
                  type="text"
                  onChange={formik.handleChange}
                  value={formik.values.Suc_Id}
                />
              {/* </Grid> */}
            {/* </Grid> */}
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#4B5563",
                margin: "8px",
                color: "#F3F4F6",
                width: "50%",
                borderRadius: "0.375rem",
                "&:hover": {
                  backgroundColor: "#1F2937",
                },
              }}
            >
              Guardar
            </Button>
            <Button
              type="submit"
              sx={{
                backgroundColor: "#4B5563",
                color: "#F3F4F6",
                width: "50%",
                borderRadius: "0.375rem",
                "&:hover": {
                  backgroundColor: "#1F2937",
                },
              }}
              onClick={() => {
                navigate("/compras");
              }}
            >
              Volver
            </Button>
          </Box>
        </CenteredHalfContainer>
      </form>
    </React.Fragment>
    // </Box>
  );
}

export default ComprasForm;
