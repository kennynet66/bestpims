import { Router } from "express";
import { loginController, signupController } from "../controllers/auth.controller";

export const router = Router()

router.post('/signup', signupController);
router.post('/login', loginController);
