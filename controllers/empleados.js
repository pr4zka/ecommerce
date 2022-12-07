const { empleados } = require("../models");

class empleadosContollers {


  static async getEmpleados(req, res) {
    const response = await empleados.findAll();
    res.status(200).json({
      status: true,
      message: "empleados encontrados",
      data: response,
    });
  }

  static async getEmpleadoById(req, res) {
    try {
      const { id } = req.params;
      const response = await empleados.findByPk(id);
      res.status(200).json({
        status: true,
        message: "empleado eocntrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createEmpleado(req, res) {
    try {
      const { descripcion } = req.body;
      const response = await empleados.create({ descripcion });
      res.status(200).json({
        status: true,
        message: "empleado creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }
  
  static async updateEmpleado(req, res) {
    try {
      const { descripcion } = req.body;
      const { id } = req.params;
      const response = await empleados.update(
        { descripcion },
        { where: { id } }
      );
      res.status(200).json({
        status: true,
        message: "empleado modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteEmpleado(req, res) {
    try {
      const { id } = req.params;
      const response = await empleados.destroy({ where: { id } });
      res.status(200).json({
        status: true,
        message: "empleado eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = empleadosContollers;