import { Router } from "express";
import { loginController, signupController } from "../controllers/auth.controller";
import { projectController } from "../controllers/project.controller";

export const router = Router()

router.post('/signup', signupController);
router.post('/login', loginController);
router.post('/project', projectController);
