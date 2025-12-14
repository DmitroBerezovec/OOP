import { BaseClass } from "../BaseClass/BaseClass";

export class Task extends BaseClass {
  text: string;
  done: boolean = false;
  timestamp?: string;

  constructor(text: string) {
    super();
    this.text = text;
  }

  toggleDone() {//перемикання виконано-не виконано
    this.done = !this.done;
    this.timestamp = this.done ? new Date().toLocaleString() : undefined;
  }
}
