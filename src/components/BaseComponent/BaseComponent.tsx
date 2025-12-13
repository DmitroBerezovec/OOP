export abstract class BaseComponent {
  id: number;

  constructor() {
    this.id = Date.now() + Math.random();
  }
}