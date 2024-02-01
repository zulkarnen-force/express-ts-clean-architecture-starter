import express from "express";

import { UserController } from "../controller/UserController";
import { UserInteractor } from "../interactor/user/userInteractor";
import { MemoryUserRepository } from "../repository/user/memoryUserRepository";
import { MongoUserRepository } from "../repository/user/mongoUserRepository";

export const UserRoutes = express.Router();

const respository = new MemoryUserRepository();
// const respository = new MongoUserRepository();
const userInteractor = new UserInteractor(respository);
const controller = new UserController(userInteractor);

UserRoutes.get("/", controller.getUsers.bind(controller));
UserRoutes.get("/create", controller.createUser.bind(controller));
