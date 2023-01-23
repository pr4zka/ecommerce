const { vs_compras } = require("../models");

class vsComprasContollers {
  static async getCompras(req, res) {
    const response = await vs_compras.findAll();
    res.status(200).json({
      status: true,
      message: "compras encontradas",
      data: response,
    });
  }

  static async getComprasById(req, res) {
    try {
      const { id } = req.params;
      const response = await vs_compras.findByPk(id);
      res.status(200).json({
        status: true,
        message: "compras econtrados",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createComrpras(req, res) {
    try {
      const { sucursal, proveedor, fecha, total, estado } = req.body;
       console.log(fecha)
      const response = await vs_compras.create({
        sucursal,
        proveedor,
        fecha,
        total,
        estado,
      });
     
      res.status(200).json({
        status: true,
        message: "compras creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async updateCompras(req, res) {
    try {
      const { body } = req.body;
      const { id } = req.params;
      const response = await vs_compras.update({ ...body }, { where: { id } });
      res.status(200).json({
        status: true,
        message: "compras modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteCompras(req, res) {
    try {
      const { id } = req.params;
      const response = await vs_compras.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "compras eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = vsComprasContollers;
