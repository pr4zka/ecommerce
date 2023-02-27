import React, { useState } from 'react';
import axios from 'axios';
// import { Document, Page } from 'react-pdf';
// import { pdfjs } from 'react-pdf';
// pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
import {Document, Page} from 'react-pdf/dist/esm/entry.vite'

function PdfPedidos() {
  const [pdfUrl, setPdfUrl] = useState(null);


  function handleDownloadPdf() {
      axios({
    url: "http://localhost:4000/pedidos/pdf", // la ruta en tu servidor que devuelve el archivo PDF
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
      <button onClick={handleDownloadPdf}>Visualizar PDF</button>
      {pdfUrl && (
        <div>
          <Document
            file={pdfUrl}
          >
          </Document>
        </div>
      )}
    </div>
  );
}

export default PdfPedidos;