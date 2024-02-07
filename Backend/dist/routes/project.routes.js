"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const project_controller_1 = require("../controllers/project.controller");
const projectRouter = (0, express_1.Router)();
projectRouter.post('/newproject', project_controller_1.projectController);
projectRouter.get('/', project_controller_1.getProjects);
projectRouter.post('/delete/:id', project_controller_1.deleteProject);
exports.default = projectRouter;
