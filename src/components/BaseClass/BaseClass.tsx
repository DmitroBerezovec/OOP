let globalId = 0;

export abstract class BaseClass {//суперклас - генерую id
  readonly id: number;

  constructor() {
        this.id = ++globalId;

  }
}