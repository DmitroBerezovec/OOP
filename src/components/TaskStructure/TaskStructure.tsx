import { BaseComponent } from "../BaseComponent/BaseComponent";

export class Task extends BaseComponent {
  text: string;
  done: boolean = false;
  timestamp?: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  toggleDone() {
    this.done = !this.done;
    this.timestamp = this.done ? new Date().toLocaleString() : undefined;
  }
}

// const TaskStructure = () => {
//   return (
//       <div className="flex flex-row w-full h-full bg-green-400">
//         <div>
//           <input type="checkbox" />
//         </div>
//         <div>
//           <input type="text" required/>
//         </div>
//       </div>
//   );
// };

// export default TaskStructure;
