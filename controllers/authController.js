const auathservice = require("../services/authService");
const auathService = new auathservice();

class auhtController {
  static async login(req, res) {
    const { email, password } = req.body;
    const user = await auathService.login(email, password);
    res.json({msg: "login", user});
  }

  static async register(req, res) {
    const {body} = req;
    const user = await auathService.register(body);
    return res.json(user)
  }
}

module.exports = auhtController; 
