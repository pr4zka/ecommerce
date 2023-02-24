import { Form, Formik } from "formik";
import { useTasks } from "../context/TaskContext";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function PedidosForm() {
  const { createCiudades, getCiuadadId, updateCiudades } = useTasks();
  const [ciudad, setCiudad] = useState({  
    Ciu_descripcion: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const city = await getCiuadadId(params.id);
        setCiudad({
          Ciu_descripcion: city.Ciu_descripcion,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={ciudad}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log("datos para Actualizar",params.id, values);
          if (params.id) {
            await updateCiudades(params.id, values);
          } else {
            await createCiudades(values);
          }
          navigate("/ciudades");
          setCiudad({
            Ciu_descripcion: "",
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
            <label className="text-black block">Descripcion</label>
            <textarea
              name="Ciu_descripcion"
              rows="3"
              placeholder="Escriba la descripcion"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.Ciu_descripcion}
            ></textarea>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 text-white w-full rounded-md m-1"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
            <button type="submit" className="bg-indigo-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full m-1" onClick={() => {navigate('/ciudades')}}>
                Volver 
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default PedidosForm;