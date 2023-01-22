const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { generateToken, verifyToken } = require("../helpers/jwt");

class auathService {
  async login(usuario, password) {
    const user = await User.findOne({ where: { usuario } });
    if (!user) {
      return new Error("Usuario no encontrado");
    }
    const isMatch = await this.compare(password, user.password);
    if (!isMatch) {
      res.json({ msg: "Contraseña incorrecta" });
      return;
    }
    const userData = await this.getUserData(user);
    res.send(userData);
    
  }

  async register(body) {
    body.password = await this.encript(body.password);
    const user = await User.create(body);
    return {
      message: "User created successfully",
      data: user,
    };
  }

  // async getUserData(user) {
  //   return userData = {
  //     usuario: user.usuario,
  //     id: user.id,
  //   };
  // }

  async encript(password) {
    try {
      const hash = await bcrypt.hash(password, 10);
      return hash;
    } catch (error) {
      console.log(error);
    }
  }

  async compare(password, hash) {
    try {
      const compare = await bcrypt.compare(password, hash);
      return compare;
    } catch (error) {
      console.log(error);
    }
  }

  //genero un token y devuelvo los datos del usuario
  async getUserData(user) {
    const userData = {
      usaurio: user.usuario,
      id: user.id,
    };

    const token = await generateToken(userData);
    return {
      user: userData,
      token,
    };
  }
}

module.exports = auathService;
