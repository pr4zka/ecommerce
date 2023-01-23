import React from "react";
import Button from "../formitems/Button";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";

const AddTasksAjustes = () => {
  const { createAjuste_Mantener, idAjuste } = useTasks();

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
              codigo: `${idAjuste}`,
              sucursal: "",
              tipoajuste: "",
              observacion: "",
              estado: "",
            }}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
                createAjuste_Mantener(values)
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
                  value={values.codigo}
                  placeholder={idAjuste}
                  onChange={handleChange}
                />
                <label className="block">Sucursal</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="sucursal"
                  value={values.sucursal}
                  placeholder={"Sucursal"}
                  onChange={handleChange}
                />
                <label className="block">Tipo Ajuste</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="tipoajuste"
                  value={values.tipoajuste}
                  placeholder={"Tipo Ajuste"}
                  onChange={handleChange}
                />
                <label className="block">Observacion</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="observacion"
                  value={values.observacion}
                  placeholder={"Observacion"}
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

export default AddTasksAjustes;
