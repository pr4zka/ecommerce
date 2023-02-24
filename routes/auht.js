const { Router } = require("express");
const router = Router();
const auhtController = require("../controllers/authController");
const requrieAuth = require('../helpers/requireAuth')

router.post("/login", auhtController.login);
router.get("/users/:id", auhtController.getUsers)
router.get("/profile", requrieAuth, async (req, res) => {
   return res.json({msg: "You are " + req.user.id })
})
router.post("/register", auhtController.register);

module.exports = router;
