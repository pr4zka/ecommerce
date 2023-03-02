import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Input } from "@mui/material";
import Button from "@mui/joy/Button";
import Textarea from "@mui/joy/Textarea";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function PedidosForm() {
  const profile = useAuthStore((state) => state.profile);
  const usuario = profile.msg.split(" ")[1];

  const { createPedido, updatePedido, getPedido, showNotification } = useTasks();

  const [pedido, setPedido] = useState({
    Pro_Id: "",
    Us_id: usuario,
    Ped_fecha: new Date()
      .toLocaleDateString("en-CA", { timeZone: "America/Asuncion" })
      .replace(/\//g, "-"),
    Ped_observacion: "",
    Ped_estado: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const ped = await getPedido(params.id);
        setPedido({
          Pro_Id: ped.Pro_Id,
          Us_id: ped.Us_id,
          Ped_fecha: new Date()
            .toLocaleDateString("en-CA", { timeZone: "America/Asuncion" })
            .replace(/\//g, "-"),
          Ped_observacion: ped.Ped_observacion,
          Ped_estado: ped.Ped_estado,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <Box noValidate autoComplete="off">
      <ToastContainer />
      <Formik
        initialValues={pedido}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            if (values.Pro_Id !== pedido.Pro_Id || values.Pro_Id == "") {
              return showNotification.error(
                "No se puede cambiar el proveedor o dejar vacio",
                "error"
              );
            }

            await updatePedido(params.id, values);
          } else {
            await createPedido(values);
          }
          navigate("/pedidos");
          setPedido({
            Pro_Id: "",
            Us_id: usuario,
            Ped_fecha: new Date()
              .toLocaleDateString("en-CA", { timeZone: "America/Asuncion" })
              .replace(/\//g, "-"),
            Ped_observacion: "",
            Ped_estado: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-100 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Pedido" : "Crear Pedido"}
            </h1>
            <TextField
              label="Proveedor"
              sx={{ m: 1, width: "40ch" }}
              variant="outlined"
              id="outlined-basic"
              color="warning"
              name="Pro_Id"
              required
              onChange={handleChange}
              value={values.Pro_Id}
            />

            <TextField
              label="Usuario"
              sx={{ m: 1, width: "40ch" }}
              color="warning"
              name="Us_Id"
              placeholder="Usuario"
              readOnly
              onChange={handleChange}
              value={values.Us_id}
            />
            <TextField
              label="Fecha"
              sx={{ m: 1, width: "40ch" }}
              color="warning"
              type="text"
              readOnly
              name="Ped_fecha"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Ped_fecha}
            />

            <TextField
              label="Observacion"
              sx={{ m: 1, width: "40ch" }}
              color="warning"
              minRows={2}
              name="Ped_observacion"
              placeholder="Observacion del pedido"
              rows="3"
              required
              onChange={handleChange}
              value={values.Ped_observacion}
            />
            <TextField
              label="Estado"
              sx={{ m: 1, width: "40ch" }}
              color="warning"
              minRows={2}
              required
              placeholder="Estado del pedido"
              size="lg"
              name="Ped_estado"
              onChange={handleChange}
              value={values.Ped_estado}
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
                navigate("/pedidos");
              }}
            >
              Volver
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  );
}

export default PedidosForm;
