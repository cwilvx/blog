import projects from "~~/data/projects/full";
import { ProjectFull } from "./interfaces";

export default function getProductById(id: string): ProjectFull {
  return projects.find((project) => project.basic.id === id);
}
