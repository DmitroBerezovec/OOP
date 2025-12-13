import { BaseComponent } from "../BaseComponent/BaseComponent";
import { Column } from "../ColumnStructure/ColumnStructure";

export class Project extends BaseComponent {
  columns: Column[] = [];

  addColumn(title: string = "Колонка") {
    this.columns.push(new Column(title));
  }

  getAllTasks() {
    return this.columns.flatMap((col) => col.tasks);
  }
}
