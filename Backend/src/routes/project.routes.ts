import { Router } from "express";
import { deleteProject, getProjects, projectController } from "../controllers/project.controller";
import { requireAuth } from "../middleware/auth.middleware";

const projectRouter = Router()

projectRouter.post('/newproject', requireAuth ,projectController);
projectRouter.get('/', requireAuth, getProjects);
projectRouter.post('/delete/:id', requireAuth, deleteProject)

export default projectRouter