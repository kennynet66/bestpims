import { Router } from "express";
import { deleteUser, getUsers, oneUser } from "../controllers/user.controller";
import { requireAuth } from "../middleware/auth.middleware";

const user_routes = Router()

user_routes.get('/', requireAuth, getUsers);
user_routes.get('/:id', requireAuth, oneUser);
user_routes.delete('/delete/:id', requireAuth, deleteUser)

export default user_routes