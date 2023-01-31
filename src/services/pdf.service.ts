import { jsPDF } from "jspdf"


function download(file: HTMLElement) {
  var doc = new jsPDF();
  doc.html(file, {
    callback: function (doc) {
      doc.save('My resume');
    },
    autoPaging: 'text',
    width: 210,
    windowWidth: file.clientWidth
  });

}

export const pdfService = {
  download
}