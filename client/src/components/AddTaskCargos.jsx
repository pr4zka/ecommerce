import React from "react";
import Button from "../formitems/Button";
import { useState } from "react";
import "./Cargos.css";
import { GrClose } from "react-icons/gr";
import { GrAddCircle } from "react-icons/gr";
import { getAllCargos } from "../api/cargos";
import { useEffect } from "react";
import { Form, Formik } from "formik";
import {useTasks} from '../context/TaskContext'


const AddTaskCargos = () => {
  const {createCargos} = useTasks(); 

  const [id, setId] = useState("");
  const [show, setShow] = useState(false);

  useEffect(() => {
    getAllCargos().then((response) => {
      setId(response.data.data[response.data.data.length - 1].id + 1);
    });
  }, []);

  return (
    <>
      <div className="add-container">
        <Button
          onClick={() => {
            setShow(!show);
          }}
        >
          <GrAddCircle/>
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
          <GrClose className="w-5"
            onClick={() => {
              setShow(false);
              
            }}
            
          />
          <Formik
            initialValues={{
              codigo: `${id}`,
              descripcion: "",
            }}
            enableReinitialize={true}
            onSubmit={async (values, actions) => {
               createCargos(values)
               actions.resetForm();
            }}
          >
            {({ handleChange, handleSubmit, values }) => (
              <Form onSubmit={handleSubmit} className="bg-slate-300 max-w-sm rounded-md p-4">
                <label className="block">Codigo</label>
                <input className="p-2 py-1 rounded-sm w-full"
                  type="text"
                  name="codigo"
                  value={id}
                  placeholder={id + 1}
                  onChange={handleChange}
                />
                <label className="block">Descripcion</label>
                <textarea className="p-2 py-1 rounded-sm w-full"
                  name="descripcion"
                  rows="4"
                  maxLength="250"
                  value={values.descripcion}
                  onChange={handleChange}
                ></textarea>
                <button className="block hover:bg-blue-500 rounded-sm p-2 py-1 w-full "
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

export default AddTaskCargos;
