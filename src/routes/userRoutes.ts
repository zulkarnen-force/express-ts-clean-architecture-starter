import express from "express";

import { UserController } from "../controller/UserController";
import { UserInteractor } from "../interactor/user/userInteractor";
import { MemoryUserRepository } from "../repository/user/memoryUserRepository";
import { MongoUserRepository } from "../repository/user/mongoUserRepository";
import { Container } from "inversify";
import { IUserInteractor } from "../interactor/user/IUserInteractor";
import { IUserRepository } from "../repository/user/IUserRepository";
import { INTERFACE_TYPE } from "../utils";

export const UserRoutes = express.Router();

const container = new Container();
container
  .bind<IUserInteractor>(INTERFACE_TYPE.UserInteractor)
  .to(UserInteractor);

container
  .bind<IUserRepository>(INTERFACE_TYPE.UserRepository)
  .to(MemoryUserRepository);

container.bind(INTERFACE_TYPE.UserController).to(UserController);

const controller = container.get<UserController>(INTERFACE_TYPE.UserController);

UserRoutes.get("/", controller.getUsers.bind(controller));
UserRoutes.get("/create", controller.createUser.bind(controller));
