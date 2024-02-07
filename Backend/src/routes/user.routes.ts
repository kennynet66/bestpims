import { Router } from "express";
import { getUsers } from "../controllers/user.controller";

const user_routes = Router()

user_routes.get('/', getUsers);

export default user_routes