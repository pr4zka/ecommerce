import { saveAs } from "file-saver";
import axios from 'axios'



export const PedidosExel = () => {
    const handleDownload = () => {
    axios
      .get('http://localhost:4000/pedidos/exel', {
        responseType: 'blob',
      })
      .then((res) => {
        const excelBlob = new Blob([res.data], {
          type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        });
        saveAs(excelBlob, `pedidos-${Date.now()}.xlsx`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
        <a onClick={handleDownload}>
             Descargar Excel
        </a>
    );
};