// import React from "react";
// import { useState } from "react";
// import ColumnStructure from "../ColumnStructure/ColumnStructure";
// import PdfGeneration from "../PdfGeneration/PdfGeneration";
// interface WorkSpaceProps {
//   switchButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
// }

// const WorkSpace: React.FC<WorkSpaceProps> = ({ switchButtonClick }) => {
//   const [columns, setColumns] = useState<number[]>([]);

//   const addColumn = () => {
//     setColumns((prev) => [...prev, +1]); // генерим уникальный key (Date.now())
//   };

//   return (
//     <div className="flex flex-col min-h-screen bg-green-500 overflow-x-auto overflow-y-hidden">
//       <div className="fixed top-0 left-0 right-0 h-[60px] bg-blue-500 text-white flex items-center px-4 z-50">
//         <button onClick={switchButtonClick} className=" bg-yellow-900 w-full">
//           back
//         </button>
//       </div>

//       <div className="flex flex-row items-start self-start max-h-screen overflow-y-hidden py-[60px] overflow-x-auto bg-blue-400">
//         {/* <div className="flex"> */}
//         {columns.map((id) => (
//           <ColumnStructure key={id} />
//         ))}
//         <button onClick={addColumn} className=" bg-red-600 w-full">
//           +Add another column
//         </button>

//       </div>
//       <PdfGeneration /> 
//     </div>
//   );
// };

// export default WorkSpace;
