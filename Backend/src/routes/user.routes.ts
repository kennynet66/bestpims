import { Router } from "express";
import { deleteUser, getUsers } from "../controllers/user.controller";

const user_routes = Router()

user_routes.get('/', getUsers);
user_routes.delete('/delete/:id', deleteUser)

export default user_routes