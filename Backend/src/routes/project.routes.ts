import { Router } from "express";
import { deleteProject, getProjects, projectController } from "../controllers/project.controller";

export const projectRouter = Router()

projectRouter.post('/newproject', projectController);
projectRouter.get('/', getProjects);
projectRouter.post('/delete/:id', deleteProject)