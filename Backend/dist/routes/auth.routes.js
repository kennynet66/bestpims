"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const signup_controller_1 = require("../controllers/signup.controller");
const login_controller_1 = require("../controllers/login.controller");
exports.router = (0, express_1.Router)();
exports.router.post('/signup', signup_controller_1.signupController);
exports.router.post('/login', login_controller_1.loginController);
