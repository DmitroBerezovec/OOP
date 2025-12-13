import { Project } from "../Project/Project";

export interface ReportGenerator {
  generate(project: Project): void;
}