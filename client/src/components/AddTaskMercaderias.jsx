import React from "react";
import Button from "../formitems/Button";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";

const AddTaskMercaderias = () => {
  const { idMercaderia, createMercaderias } = useTasks();
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
              codigo: `${idMercaderia}`,
              descripcion: "",
              estado: "",
              preciocompra: "",
              precioventa: "",
              idtipoimpuesto: "",
            }}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              createMercaderias(values);
              actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form
                onSubmit={handleSubmit}
                className="bg-slate-300 max-w-sm rounded-md p-4"
              >
                <label className="block">Codigo</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="codigo"
                  value={idMercaderia}
                  placeholder={idMercaderia}
                  onChange={handleChange}
                />
                <label className="block">Tipo Impuesto</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="idtipoimpuesto"
                  value={values.idtipoimpuesto}
                  placeholder={"Tipo impuesto"}
                  onChange={handleChange}
                />
                <label className="block">Descripcion</label>
                <textarea
                  className="p-2 py-1 rounded-sm w-full"
                  name="descripcion"
                  rows="4"
                  maxLength="200"
                  value={values.descripcion}
                  onChange={handleChange}
                ></textarea>
                <label className="block">Precio Compra</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="preciocompra"
                  value={values.preciocompra}
                  placeholder={"Tipo impuesto"}
                  onChange={handleChange}
                />
                <label className="block">Precio Venta</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="precioventa"
                  value={values.precioventa}
                  placeholder={"Tipo impuesto"}
                  onChange={handleChange}
                />
                <label className="block">Estado</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="estado"
                  value={values.estado}
                  placeholder={"Estado"}
                  onChange={handleChange}
                />
                <button
                  className="block hover:bg-blue-500 rounded-sm p-2 py-1 w-full "
                  type="submit"
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

export default AddTaskMercaderias;
