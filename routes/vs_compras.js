const { Router } = require("express");
const comprasControllers = require('../controllers/vs_compras')
const router = Router();

router.get("/compras", comprasControllers.getCompras);
router.get("/compras/:id", comprasControllers.getComprasById);
router.post("/compras", comprasControllers.createComrpras);
router.patch("/compras/:id", comprasControllers.updateCompras);
router.delete("/compras/:id", comprasControllers.deleteCompras);

module.exports = router;
