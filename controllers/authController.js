const auathservice = require("../services/authService");
const auathService = new auathservice();
const { User } = require("../models");
const { generateToken } = require("../helpers/jwt");

class auhtController {
  static async login(req, res) {
    const { password } = req.body;
    try {
      const user = await User.findOne({ usuario: req.body.usuario });
      if (!user) {
        res.json({ msg: "Usuario no encontrado" });
        return;
      }
      const isMatch = await auathService.compare(password, user.password);
      if (!isMatch) {
        res.json({ msg: "Contraseña incorrecta" });
        return;
      }
      
      const data = {
        token: await generateToken(user)
      };
      return res.json({
        data,
      });
      
    } catch (error) {
      res.json(error);
    }
  }

  static async register(req, res) {
    const { body } = req;
    const user = await auathService.register(body);
    return res.json(user);
  }
}

module.exports = auhtController;
