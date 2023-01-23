import React from "react";
import Button from "../formitems/Button";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskContext";

const AddTaskCompras = () => {
  const { createCompra, idCompra } = useTasks();

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
              codigo: `${idCompra}`,
              sucursal: "",
              proveedor: "",
              fecha: "",
              total: "",
              estado: "",
            }}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
              createCompra(values);
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
                  placeholder={idCompra}
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
                <label className="block">Proveedor</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="proveedor"
                  value={values.proveedor}
                  placeholder={"proveedor"}
                  onChange={handleChange}
                />
                <label className="block">Fecha</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="date"
                  name="fecha"
                  value={values.fecha}
                  placeholder={"Fecha"}
                  onChange={handleChange}
                />
                <label className="block">Total</label>
                <input
                  className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="total"
                  value={values.total}
                  placeholder={"Total"}
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
                  className="block hover:bg-blue-500 rounded-sm p-2 py-1 w-full"
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

export default AddTaskCompras;
