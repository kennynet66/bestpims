"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const user_routes = (0, express_1.Router)();
user_routes.get('/', auth_middleware_1.requireAdmin, user_controller_1.getUsers);
user_routes.get('/:id', auth_middleware_1.requireAuth, user_controller_1.oneUser);
user_routes.get('/one/:id', auth_middleware_1.requireAdmin, user_controller_1.oneUser);
user_routes.delete('/delete/:id', auth_middleware_1.requireAdmin, user_controller_1.deleteUser);
exports.default = user_routes;
