const express = require("express");
const morgan = require("morgan");
const { PORT } = require("./config/index");
const app = express();
const cors = require("cors");
const auth = require('./routes/auht')

// settings
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("dev"));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

//routes
app.use(auth);
app.use(require("./routes/ciudades"));
app.use(require("./routes/cargos"));
app.use(require("./routes/empleados"));
app.use(require("./routes/estadoCivil"));
app.use(require("./routes/marcas"));
app.use(require("./routes/mercaderias"));
app.use(require("./routes/paises"));

//server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
