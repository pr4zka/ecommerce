import React, { useState } from "react";
import axios from "axios";
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import { Document, Page } from "react-pdf/dist/esm/entry.vite";

function PdfCiudades() {
  const [pdfUrl, setPdfUrl] = useState(null);

  function handleDownloadPdf() {
    axios({
      url: "http://localhost:4000/ciudades/pdf", // la ruta en tu servidor que devuelve el archivo PDF
      method: "GET",
      responseType: "blob", // indica que la respuesta es un blob (archivo binario)
    })
      .then((response) => {
        // convierte el blob a una URL de objeto para mostrar el PDF
        const pdfUrl = URL.createObjectURL(response.data);
        // muestra el PDF en una nueva ventana
        window.open(pdfUrl);
      })
      .catch((error) => {
        console.error("Error downloading PDF: ", error);
      });
  }

  return (
    <div>
      <div
        onClick={handleDownloadPdf}
        style={{
          display: "inline-block",
          padding: "8px 16px",
          color: "white",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Visualizar PDF
      </div>
      {pdfUrl && (
        <div>
          <Document file={pdfUrl}></Document>
        </div>
      )}
    </div>
  );
}

export default PdfCiudades;
