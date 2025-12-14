import { Project } from "../Project/Project";

export interface ReportGenerator {// інтерфейс для реалізації Dependency Inversion Principle
  generate(project: Project): void;
}