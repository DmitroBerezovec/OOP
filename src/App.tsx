import { useState } from "react";
import { Project } from "./components/Project/Project";
import { ColumnView } from "./components/ColumnView/ColumnView";
import { PDFReportGenerator } from "./components/PdfGeneration/PdfGeneration";

export default function App() {
  const [project] = useState(() => new Project());
  const [, setUpdate] = useState({});
  const [columnTitle, setColumnTitle] = useState("");

  const refresh = () => setUpdate({});//ререндер сторінки

  const addColumn = () => {//додавання нової колонки в Project
    if (!columnTitle.trim()) return;
    project.addColumn(columnTitle);
    setColumnTitle("");
    refresh();
  };

  return (
    <div className="p-5 flex flex-col gap-4">

      <div className="flex gap-2">
        <input
          type="text"
          value={columnTitle}
          onChange={(e) => setColumnTitle(e.target.value)}
          placeholder="Назва колонки"
          className="border px-2 py-1 rounded"
        />

        <button
          className="bg-blue-600 text-white px-4 py-2 rounded"
          onClick={addColumn}
        >
          Додати колонку
        </button>
      </div>

      <div className="flex gap-4 overflow-x-auto">
        {project.columns.map((col) => (
          <ColumnView key={col.id} column={col} onChange={refresh} />//відображення колонок
        ))}
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"//генерація pdf
        onClick={() => {
          const pdf = new PDFReportGenerator();
          pdf.generate(project);
        }}
      >
        Згенерувати PDF
      </button>
    </div>
  );
}
