import { Router } from "express";
import { deleteUser, getUsers, oneUser } from "../controllers/user.controller";
import { requireAdmin, requireAuth } from "../middleware/auth.middleware";

const user_routes = Router()

user_routes.get('/', requireAdmin, getUsers);
user_routes.get('/:id', requireAdmin, oneUser);
user_routes.delete('/delete/:id', requireAdmin, deleteUser)

export default user_routes