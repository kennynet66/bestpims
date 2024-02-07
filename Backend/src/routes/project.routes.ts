import { Router } from "express";
import { deleteProject, getProjects, projectController } from "../controllers/project.controller";

const projectRouter = Router()

projectRouter.post('/newproject', projectController);
projectRouter.get('/', getProjects);
projectRouter.post('/delete/:id', deleteProject)

export default projectRouter