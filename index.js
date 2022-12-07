const express = require('express');
const morgan = require('morgan');
const {PORT} = require('./config/index')
const app = express();
const cors = require('cors')

// settings
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(morgan('dev'));
app.use(cors({
  origin: "*"
}))


//routes
app.use(require('./routes/auht'));
app.use(require('./routes/ciudades'))
app.use(require('./routes/cargos'))
app.use(require('./routes/empleados'))
app.use(require('./routes/estadoCivil'))
app.use(require('./routes/marcas'))
app.use(require('./routes/mercaderias'))

//server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));