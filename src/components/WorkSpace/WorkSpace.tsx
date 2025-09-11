import React from "react";
import ColumnStructure from "../ColumnStructure/ColumnStructure"
interface WorkSpaceProps {
  switchButtonClick: (event: React.MouseEvent<HTMLElement>) => void;
}
const WorkSpace: React.FC<WorkSpaceProps> = ({ switchButtonClick }) => {
  return (
    <div className="flex flex-col w-screen h-screen bg-green-500">
      <button onClick={switchButtonClick}>back</button>
      <div className="flex flex-row items-start bg-blue-400  w-screen h-screen">
        
        <div className="flex">
          <button >+Add another column</button>
        </div>
      </div>
      <button>generate and download report in pdf</button>
    </div>
  );
};

export default WorkSpace;
