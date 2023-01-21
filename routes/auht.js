const { Router } = require("express");
const router = Router();
const auhtController = require("../controllers/authController");

router.post("/login", auhtController.login);
router.post("/register", auhtController.register);

module.exports = router;
