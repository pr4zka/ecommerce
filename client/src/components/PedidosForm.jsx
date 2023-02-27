import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuthStore } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PedidosForm() {
  const profile = useAuthStore((state) => state.profile);
  const usuario = profile.msg.split(" ")[1];

  const { createPedido, updatePedido, getPedido, showNotification } = useTasks();

  const showToastMessage = () => {
    toast.error("No se puede cambiar el proveedor o dejar vacio", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };


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
    <div>
      <ToastContainer />
      <Formik
        initialValues={pedido}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          if (params.id) {
            if (values.Pro_Id !== pedido.Pro_Id || values.Pro_Id == "") {
              return showToastMessage();
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
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Registro" : "Crear Registro"}
            </h1>
            <label className="text-black block">Proveedor</label>
            <input
              type="number"
              name="Pro_Id"
              placeholder="Coloca el codigo del proveedor"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Pro_Id}
            />

            <label className="text-black block">Usuario</label>
            <input
              type="text"
              name="Us_Id"
              placeholder="Usuario"
              readOnly
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Us_id}
            />
            <label className="text-black block">Pedido Fecha</label>
            <input
              type="text"
              readOnly
              name="Ped_fecha"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Ped_fecha}
            />

            <label className="text-black block">Obersvacion Pedido</label>
            <textarea
              name="Ped_observacion"
              rows="3"
              placeholder="Escriba una observacion"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Ped_observacion}
            ></textarea>
            <label className="text-black block">Estado Pedido</label>
            <textarea
              name="Ped_estado"
              rows="3"
              placeholder="Escriba el estado del pedido"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Ped_estado}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md m-1 hover:bg-blue-700"
              onClick={() => {
                showNotification.success("Pedido Editado")
              }}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <button
              type="submit"
              className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full m-1"
              onClick={() => {
                navigate("/pedidos");
              }}
            >
              Volver
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PedidosForm;
