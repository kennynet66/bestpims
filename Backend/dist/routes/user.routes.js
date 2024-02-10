"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../controllers/user.controller");
const user_routes = (0, express_1.Router)();
user_routes.get('/', user_controller_1.getUsers);
user_routes.get('/:id', user_controller_1.oneUser);
user_routes.delete('/delete/:id', user_controller_1.deleteUser);
exports.default = user_routes;
