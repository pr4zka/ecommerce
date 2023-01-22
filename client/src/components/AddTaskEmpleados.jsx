import React from "react";
import Button from "../formitems/Button";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { Formik, Form } from "formik";
import { createEmpleado } from "../api/empleados";

const AddTaskEmpleados = () => {
  const [show, setShow] = useState(false);

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
            initialValues={{
              nombre: "",
              apellido: "",
              ci: "",
              estadoCivil: "",
              nacionalidad: "",
              ciudad: "",
              estado: "",
            }}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              await createEmpleado(values);
              actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form
                onSubmit={handleSubmit}
                className="bg-slate-300 max-w-sm rounded-md p-4"
              >
                <label className="block">Nombre</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="nombre"
                  value={values.nombre}
                  placeholder="Ingrese el nombre"
                  onChange={handleChange}
                />
                <label>Apellido</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="apellido"
                  value={values.apellido}
                  placeholder="Ingrese el Apellido"
                  onChange={handleChange}
                />
                <label>CI</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="ci"
                  value={values.ci}
                  placeholder="Ingrese el CI"
                  onChange={handleChange}
                />
                <label>Estado Civil</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="estadoCivil"
                  value={values.estadoCivil}
                  placeholder="Ingrese el Estado Civil"
                  onChange={handleChange}
                />
                <label className="block">Nacionalidad</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="nacionalidad"
                  value={values.nacionalidad}
                  placeholder="Ingrese la Nacionalidad"
                  onChange={handleChange}
                />
                <label>Ciudad</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="ciudad"
                  value={values.ciudad}
                  placeholder="Ingrese la Ciudad"
                  onChange={handleChange}
                />
                <label>Estado</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="estado"
                  value={values.estado}
                  placeholder="Estado"
                  onChange={handleChange}
                />
                <button
                  className="block hover:bg-blue-500 rounded-sm p-2 py-2 w-full "
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  Agregar
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default AddTaskEmpleados;
