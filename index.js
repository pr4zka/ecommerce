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



/*
  shippingAddres: {
        addres: { type: Sequelize.STRING, allowNull: false },
        city: { type: Sequelize.STRING, allowNull: false },
        distric: { type: Sequelize.STRING, allowNull: false },
        phone: {type: Sequelize.NUMBER, allowNull: false}
      },
      totalPrice: { type: Sequelize.NUMBER, allowNull: false, default: 0.0 },
      isPaid: {type: Sequelize.BOOLEAN, allowNull: false, default: false},
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

*/



//server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));