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
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from '@mui/material/InputLabel';

function ServicesForm() {
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
    <Box
      noValidate
      autoComplete="off"
      component="form"
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        marginTop: "auto",
      }}
    >
      <CenteredHalfContainer>
        <ToastContainer />
        <Formik
          initialValues={""}
          enableReinitialize={true}
          onSubmit={async (values, actions) => {
            if (params.id) {
              await updateCiudades(params.id, values);
              showNotification.success("Ciudad actualizada");
            } else {
              await createCiudades(values);
            }
            navigate("/ciudades");
            setCiudad({
              Ciud_id: "",
              Ciu_descripcion: "",
            });
          }}
        >
          {({ handleChange, handleSubmit, values, isSubmitting }) => (
            <Form
              onSubmit={handleSubmit}
              className="bg-slate-100 max-w-sm rounded-md p-4 mx-auto mt-10"
            >
              <h1 className="text-xl font-bold uppercase text-center">
                {params.id ? "Editar Servicio" : "Crear Servicio"}
              </h1>
              <TextField
                label="Venta"
                sx={{ m: 1, width: "40ch" }}
                variant="outlined"
                id="outlined-basic"
                color="warning"
                name="Ciu_descripcion"
                required
                onChange={handleChange}
              />
                  <TextField
                label="Transportista"
                sx={{ m: 1, width: "40ch" }}
                variant="outlined"
                id="outlined-basic"
                color="warning"
                name="Ciu_descripcion"
                required
                onChange={handleChange}
              />
              <TextField
                label="Direccion"
                sx={{ m: 1, width: "40ch" }}
                variant="outlined"
                id="outlined-basic"
                color="warning"
                name="Ciu_descripcion"
                required
                onChange={handleChange}
              />
              <TextField
                label="Fecha"
                sx={{ m: 1, width: "40ch" }}
                variant="outlined"
                id="outlined-basic"
                color="warning"
                name="Ciu_descripcion"
                required
                onChange={handleChange}
              />
              <TextField
                label="Estado"
                sx={{ m: 1, width: "40ch" }}
                variant="outlined"
                id="outlined-basic"
                color="warning"
                name="Ciu_descripcion"
                required
                onChange={handleChange}
              />
              <Button
                variant="contained"
                type="submit"
                disabled={isSubmitting}
                sx={{
                  backgroundColor: "#4B5563",
                  color: "#F3F4F6",
                  width: "100%",
                  marginTop: "4px",
                  borderRadius: "0.375rem",
                  "&:hover": {
                    backgroundColor: "#1F2937",
                  },
                }}
              >
                {isSubmitting ? "Registrando..." : "Registrar"}
              </Button>
              <Button
                type="submit"
                sx={{
                  backgroundColor: "#4B5563",
                  color: "#F3F4F6",
                  width: "100%",
                  marginTop: "4px",
                  borderRadius: "0.375rem",
                  "&:hover": {
                    backgroundColor: "#1F2937",
                  },
                }}
                onClick={() => {
                  navigate("/ciudades");
                }}
              >
                Volver
              </Button>
            </Form>
          )}
        </Formik>
      </CenteredHalfContainer>
    </Box>
  );
}

export default ServicesForm;
