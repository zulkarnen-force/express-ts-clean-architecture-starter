"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controller/UserController");
const userInteractor_1 = require("../interactor/user/userInteractor");
const memoryUserRepository_1 = require("../repository/user/memoryUserRepository");
exports.UserRoutes = express_1.default.Router();
const respository = new memoryUserRepository_1.MemoryUserRepository();
// const respository = new MongoUserRepository();
const userInteractor = new userInteractor_1.UserInteractor(respository);
const controller = new UserController_1.UserController(userInteractor);
exports.UserRoutes.get("/", controller.getUsers.bind(controller));
exports.UserRoutes.get("/create", controller.createUser.bind(controller));
