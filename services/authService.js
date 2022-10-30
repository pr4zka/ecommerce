const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { generateToken, verifyToken } = require("../helpers/jwt");

class auathService {
  async login(email, password) {
    const user = await User.findOne({ where: { email } });
    if (user && (await this.compare(password, user.password))) {
       return this.#getUserData(user);
    }
  }

  async register(body) {
    body.password = await this.encript(body.password);
    const user = await User.create(body);
    return {
      message: "User created successfully",
      data: user
    };
  }

  async getUserData(user) {
    const userData = {
      name: user.name,
      lastname: user.lastname,
      email: user.email,
      id: user.id,
    };
  }

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
  async #getUserData(user) {
    const userData = {
      name: user.name,
      email: user.email,
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
