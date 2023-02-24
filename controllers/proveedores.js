const proveedores = require("../models/proveedores");
const PDFDocument = require("pdfkit-table");

class pedidosContollers {
  static async getProv(req, res) {
    const response = await proveedores.findAll();
    return res.status(200).json({
      status: true,
      message: "proveedores encontrados",
      data: response,
    });
  }



  static async generatePdf(req, res) {
    const doc = new PDFDocument();

    pedidos
      .findAll()
      .then((pedidos) => {
        // Genera la tabla con los datos
        doc
          .fontSize(12)
          .text("Registro Pedidos", { align: "center" })
          .moveDown(0.5);
        const table = {
          headers: ["ID", "Nombre"],
          rows: [],
        };
        pedidos.forEach((pedido) => {
          table.rows.push([pedido.Ciu_id, pedido.Ciu_descripcion]);
        });
        doc.table(table, {
          prepareHeader: () => doc.font("Helvetica-Bold"),
          prepareRow: (row, i) => doc.font("Helvetica").fontSize(10),
        });
        res.setHeader("Content-Type", "application/pdf");
        // Establece el encabezado de la respuesta
        res.setHeader(
          "Content-Disposition",
          `attachment; filename="${`ciudades-${Date.now()}`}.pdf"`
        );
        // Envía la respuesta de encabezado
        doc.pipe(res);
        doc.end();
      })
      .catch((err) => {
        console.error("Error retrieving users from the database: " + err);
        res.status(500).send("Error retrieving users from the database");
      });
  }


  
  static async getProvById(req, res) {
    try {
      const { id } = req.params;
      const response = await proveedores.findByPk(id);
      res.status(200).json({
        status: true,
        message: "proveedor encontrado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }

  static async createProv(req, res) {
    try {
      const { body } = req;
      const response = await proveedores.create({ ...body });
      res.status(200).json({
        status: true,
        message: "proveedor creado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async updateProv(req, res) {
    try {
      const { Ciu_descripcion } = req.body;
      const { id } = req.params;
      const response = await proveedores.update(
        { Ciu_descripcion },
        { where: { Ciu_id: id } }
      );
      res.status(200).json({
        status: true,
        message: "proveedor modificado",
        data: response,
      });
    } catch (error) {
      console.log(error);
      res.json(error);
    }
  }

  static async deleteProv(req, res) {
    try {
      const { id } = req.params;
      const response = await proveedores.destroy({ where: {id} });
      res.status(200).json({
        status: true,
        message: "proveedor eliminado",
        data: response,
      });
    } catch (error) {
      res.json(error);
    }
  }
}

module.exports = pedidosContollers;
