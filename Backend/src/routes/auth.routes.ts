import { Router } from "express";
import { signupController } from "../controllers/signup.controller";
import { loginController } from "../controllers/login.controller";

export const router = Router()

router.post('/signup', signupController);
router.post('/login', loginController);

