// import { useState } from "react";
// import TaskStructure from "../TaskStructure/TaskStructure";

// const ColumnStructure = () => {
//   const [tasks, setTasks] = useState<number[]>([]);

//   const addTask = () => {
//     setTasks((prev) => [...prev, +1]); // генерим уникальный key (Date.now())
//   };

//   return (
//     <div className="flex flex-col bg-yellow-200 w-[200px] max-h-[700px] mr-[8px] ml-[8px]">
//       <div>
//         <input type="text" required />
//       </div>
//       <div className="flex flex-col overflow-y-auto max-h-[500px] overflow-x-hidden">
//         {tasks.map((id) => (
//           <TaskStructure key={id} />
//         ))}
//       </div>
//       <div>
//         <button onClick={addTask}>+Add task</button>
//       </div>
//     </div>
//   );
// };

// export default ColumnStructure;

import { BaseComponent } from "../BaseComponent/BaseComponent";
import { Task } from "../TaskStructure/TaskStructure";

export class Column extends BaseComponent {
  title: string;
  tasks: Task[] = [];

  constructor(title: string = "Нова колонка") {
    super();
    this.title = title;
  }

  addTask(text: string) {
    if (!text.trim()) return;
    this.tasks.push(new Task(text));
  }

  toggleTask(taskId: number) {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) task.toggleDone();
  }
}