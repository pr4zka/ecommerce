import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { Icon } from "react-icons-kit";
import { view } from "react-icons-kit/ikons/view";
import { view_off } from "react-icons-kit/ikons/view_off";
import { register, login, profileReques } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Login = () => {
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const showToastMessage = () => {
    toast.success("Bienvenido al Sistema", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const showToastError = () => {
    toast.error("Usuario o Contraseña Incorrecta", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const [type, setType] = useState("password");
  const [icon, setIcon] = useState(view_off);

  const handleToggle = () => {
    if (type === "password") {
      setIcon(view);
      setType("text");
    } else {
      setIcon(view_off);
      setType("password");
    }
  };

  const handleLogin = async (values) => {
    const resLogin = await login(values);
    if (resLogin.status === 400) {
      showToastError();
    } else {
      setToken(resLogin.data.token);
      showToastMessage();
      const resProfile = await profileReques();
      setProfile(resProfile.data);
      navigate("/");
    }
  };
  return (

    <div className="background">
      <div className="container-f">
        <h2 className="f-t text-sky-700">Incio al Sistema</h2>
        <ToastContainer />
        <Formik
          initialValues={{
            usuario: "",
            password: "",
          }}
          onSubmit={(values) => handleLogin(values)}
        >
          <Form className="form">
            <Field
              type="text"
              name="usuario"
              placeholder="Usuario"
              className="input i-l"
            />
            <Field
              type={type}
              name="password"
              placeholder="Password"
              className="input i-l"
            />
            <span className="password-toogle-icon-l" onClick={handleToggle}>
              <Icon icon={icon} />
            </span>
            <button className="btn-form hover:bg-green-400" type="submit"> 
              Iniciar Sesion
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
