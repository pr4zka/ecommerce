import { useNavigate } from "react-router-dom";
import {  login, profileReques } from "../api/auth";
import { useAuthStore } from "../store/auth";
import { useFormik } from "formik";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTasks } from "../context/TaskContext";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";



export const Login = () => {
  const { showNotification } = useTasks();
  const setToken = useAuthStore((state) => state.setToken);
  const setProfile = useAuthStore((state) => state.setProfile);
  const navigate = useNavigate();

  const showToastError = () => {
    toast.error("Usuario o Contraseña Incorrecta", {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleLogin = async (values) => {
    console.log(values);
    const resLogin = await login(values);
    if (resLogin.status === 400) {
      showToastError();
    } else {
      setToken(resLogin.data.token);
      const resProfile = await profileReques();
      setProfile(resProfile.data);
      showNotification.success(
        `Bienvenido ${resProfile.data.msg.split(" ")[2]}`
      );
      navigate("/");
    }
  };

  const formik = useFormik({
    initialValues: {
      usuario: "",
      password: "",
    },
    onSubmit: (values) => handleLogin(values),
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Iniciar Sesion
        </Typography>
        <ToastContainer />
        <form onSubmit={formik.handleSubmit}>
          <TextField
            margin="normal"
            required
            fullWidth
            label="Usuasrio"
            name="usuario"
            onChange={formik.handleChange}
            autoComplete="name"
            autoFocus
            type="text"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            onChange={formik.handleChange}
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </form>
      </Box>
    </Container>
  );
};
