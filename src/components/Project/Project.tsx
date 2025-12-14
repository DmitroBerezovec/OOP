import { BaseClass } from "../BaseClass/BaseClass";
import { Column } from "../ColumnClass/ColumnClass";

export class Project extends BaseClass {
  columns: Column[] = [];

  addColumn(title: string ) {
    this.columns.push(new Column(title));
  }

  getAllTasks() {
    return this.columns.flatMap((col) => col.tasks);
  }
}
