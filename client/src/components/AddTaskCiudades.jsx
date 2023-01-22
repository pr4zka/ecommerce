import React from "react";
import Button from "../formitems/Button";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";

const AddTaskCiudades = () => {
  const { createCiudades, idCiudad } = useTasks();

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
              codigo: `${idCiudad}`,
              descripcion: "",
            }}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              createCiudades(values);
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
                  value={idCiudad}
                  placeholder={idCiudad + 1}
                  onChange={handleChange}
                />
                <label className="block">Descripcion</label>
                <textarea
                  className="p-2 py-1 rounded-sm w-full"
                  name="descripcion"
                  rows="4"
                  maxLength="250"
                  value={values.descripcion}
                  onChange={handleChange}
                ></textarea>
                <button
                  className="block hover:bg-blue-500 rounded-sm p-2 py-1 w-full "
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

export default AddTaskCiudades;
