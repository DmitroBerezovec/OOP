import { BaseClass } from "../BaseClass/BaseClass";
import { Task } from "../TaskClass/TaskClass";

export class Column extends BaseClass {
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
    const task = this.tasks.find((t) => t.id === taskId);
    if (task) task.toggleDone();
  }
}
