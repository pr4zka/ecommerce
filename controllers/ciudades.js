const { ciudades } = require("../models");

class ciudadesContollers {


  static async getCiudades(req, res) {
    const response = await ciudades.findAll();
    res.status(200).json({
      status: true,
      message: "Ciudades encontrada",
      data: response,
    });
  }

  static async getCiudadesById(req, res) {
    try {
      const { id } = req.params;
      const response = await ciudades.findByPk(id);
      res.status(200).json({
        status: true,
        message: "Ciudad eocntrada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createCiudades(req, res) {
    try {
      const { descripcion } = req.body;
      const response = await ciudades.create({ descripcion });
      res.status(200).json({
        status: true,
        message: "Ciudad creada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateCiudades(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await ciudades.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "Ciudad modificada",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteCiudades(req, res) {
    try {
      const { id } = req.params;
      const response = await ciudades.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "Ciudad eliminada",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = ciudadesContollers;
