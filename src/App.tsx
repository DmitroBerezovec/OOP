// import "./App.css";
// import "./index.css";
// import { useState } from "react";
// import WorkSpace from "./components/WorkSpace/WorkSpace";

// function App() {
//   const [switchArea, setswitchArea] = useState(true);
//   const switchButtonClick = () => {
//     setswitchArea(true);
//   };
//   return (
//     <div className="flex flex-col justify-between min-h-screen overflow-x-auto overflow-y-hidden text-center m-0 p-0">
//       {switchArea ? (
//         <div className="flex flex-col justify-between min-h-screen overflow-x-auto text-center m-0 p-0">
//           <div className="flex h-[200px] justify-center items-center">
//             <h1>tralallelo</h1>
//           </div>

//           <button onClick={() => setswitchArea(false)}>
//             create new project
//           </button>
//           <div></div>
//         </div>
//       ) : (
//         <WorkSpace switchButtonClick={switchButtonClick} />
//       )}
//     </div>
//   );
// }

// export default App;
import { useState } from "react";
import { Project } from "./components/Project/Project";
import { ColumnView } from "./components/ColumnView/ColumnView";
import { PDFReportGenerator } from "./components/PdfGeneration/PdfGeneration";

export default function App() {
  const [project] = useState(() => new Project());
  const [, setUpdate] = useState({}); // force rerender

  const refresh = () => setUpdate({});

  return (
    <div className="p-5 flex flex-col gap-4">
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded"
        onClick={() => {
          project.addColumn("Колонка");
          refresh();
        }}
      >
        Додати колонку
      </button>

      <div className="flex gap-4 overflow-x-auto">
        {project.columns.map(col => (
          <ColumnView key={col.id} column={col} onChange={refresh} />
        ))}
      </div>

      <button
        className="bg-green-600 text-white px-4 py-2 rounded"
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
