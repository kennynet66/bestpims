import { Router } from "express";
import { completeProject, deleteProject, getProjects, projectController, userProjects } from "../controllers/project.controller";
import { requireAdmin, requireAuth } from "../middleware/auth.middleware";

const projectRouter = Router()

projectRouter.post('/newproject', requireAdmin ,projectController);
projectRouter.get('/', requireAdmin, getProjects);
projectRouter.post('/delete/:id', requireAdmin, deleteProject)
projectRouter.post('/complete/:id', requireAuth, completeProject)
projectRouter.get('/userprojects', requireAuth,userProjects)

export default projectRouter