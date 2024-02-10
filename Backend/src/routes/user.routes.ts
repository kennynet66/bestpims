import { Router } from "express";
import { deleteUser, getUsers, oneUser } from "../controllers/user.controller";

const user_routes = Router()

user_routes.get('/', getUsers);
user_routes.get('/:id', oneUser);
user_routes.delete('/delete/:id', deleteUser)

export default user_routes