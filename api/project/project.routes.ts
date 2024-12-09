import { Router } from "express"
import {
  createProject,
  getProjects,
  removeProject,
  updateProject,
} from "./project.controller.js"

export const projectRoutes = Router()

projectRoutes.post("", createProject)
projectRoutes.get("", getProjects)
projectRoutes.put("/:id", updateProject)
projectRoutes.delete("/:id", removeProject)
