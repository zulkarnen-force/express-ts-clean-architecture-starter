import { NextFunction, Response, Request } from "express";
import { IUserInteractor } from "../interactor/user/IUserInteractor";
import { User } from "./../entity/User";

export class UserController {
  private interactor: IUserInteractor;
  constructor(interactor: IUserInteractor) {
    this.interactor = interactor;
  }

  async getUsers(req: Request, res: Response, next: NextFunction) {
    try {
      const result = await this.interactor.getUsers();
      return res.json(result);
    } catch (error) {
      throw error;
    }
  }

  async createUser(req: Request, res: Response, next: NextFunction) {
    try {
      const data = {
        name: "name",
        email: "email",
        password: "password",
      };
      const result = await this.interactor.createUser(data);
      return res.json(result);
    } catch (error) {
      next(error);
    }
  }
}
