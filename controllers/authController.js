const auathservice = require("../services/authService");
const auathService = new auathservice();

class auhtController {
  
  static async login(req, res) {
    const { usuario, password } = req.body;
    const user = await auathService.login(usuario, password);
    res.json({msg: "Login succes", user});
  }

  static async register(req, res) {
    const {body} = req;
    console.log(body)
    const user = await auathService.register(body);
    return res.json(user)
  }
}

module.exports = auhtController; 
