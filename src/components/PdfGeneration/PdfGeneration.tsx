// const PdfGeneration = () => {
//   return (
//     <div className="fixed bottom-[20px] left-0 right-0 h-[60px] bg-gray-800 text-white flex items-center px-4 z-50">
//       <button className=" bg-purple-500 w-full">
//         generate and download report in pdf
//       </button>
//     </div>
//   );
// };

// export default PdfGeneration;
import jsPDF from "jspdf";
import type { ReportGenerator } from "../ReportGenerator/ReportGenerator";
import { Project } from "../Project/Project";
import "../../fonts/dejavu-sans-webfont-normal.js";

export class PDFReportGenerator implements ReportGenerator {
  generate(project: Project): void {
    const doc = new jsPDF();

    doc.setFont("dejavu-sans-webfont");

    doc.setFontSize(18);
    doc.text("Звіт по проекту", 20, 20);

    let y = 40;

    project.columns.forEach((col) => {
      doc.setFontSize(14);
      doc.text(`Колонка: ${col.title}`, 20, y);
      y += 10;

      col.tasks.forEach((task) => {
        const line = task.done
          ? `[+] ${task.text} — виконано: ${task.timestamp}`
          : `[-] ${task.text} — не виконано`;

        doc.setFontSize(12);
        doc.text(line, 30, y, { maxWidth: 160 });
        y += 8;
      });

      y += 10;
    });

    doc.save("project-report.pdf");
  }
}
