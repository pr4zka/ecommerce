import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Button from "../formitems/Button";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";
import axios from "axios";

const AddTaskCiudades = () => {
  const { createCiudades, idCiudad } = useTasks();
  const [show, setShow] = useState(false);
  // const [count, setCount] = useState(0);

  const [ciudad, setCiudades] = useState({
    Ciu_descripcion: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getCiudadId = async () => {
      if (params.id) {
        const res = await axios.get(
          `http://localhost:4000/ciudades/${params.id}`
        );
        setCiudades({
          Ciu_descripcion: res.data.data.Ciu_descripcion,
        });
      }
    };
    getCiudadId();
  }, []);

  // const handleAdd = () => {
  //   setCount(count + 1);
  // };

  return (
    <>
      <div className="add-container">
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          <GrAddCircle />
        </Button>
      </div>
      <div
        className="modal"
        style={
          show
            ? {
                display: "flex",
              }
            : {
                display: "none",
              }
        }
        onClick={(e) => (e.target.className === "modal" ? setShow(false) : {})}
      >
        <div className="input-add-container">
          <GrClose
            onClick={() => {
              setShow(false);
            }}
          />
          <Formik
            initialValues={ciudad}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await axios.patch(
                  `http://localhost:4000/ciudades/${params.id}`,
                  values
                );
                navigate("/ciudades");
              } else {
                await createCiudades(values);
              }
              setCiudades({
                Ciu_descripcion: "",
              });
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              console.log("values", values),
              <Form
                onSubmit={handleSubmit}
                className="bg-slate-300 max-w-sm rounded-md p-4"
              >
                {/* <label className="block">Codigo</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="codigo"
                  value={count}
                  placeholder={count}
                  onChange={handleChange}
                /> */}
                <label className="block">Descripcion</label>
                <textarea
                  className="p-2 py-1 rounded-sm w-full"
                  name="Ciu_descripcion"
                  rows="4"
                  maxLength="250"
                  value={values.Ciu_descripcion}
                  onChange={handleChange}
                ></textarea>
                <button
                  className="block hover:bg-blue-500 rounded-sm p-2 py-1 w-full "
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  {params.id ? "Actualizar" : "Agregar"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddTaskCiudades;
