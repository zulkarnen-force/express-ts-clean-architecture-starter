import { inject, injectable } from "inversify";
import { User } from "../../entity/User";
import { IUserRepository } from "../../repository/user/IUserRepository";
import { IUserInteractor } from "./IUserInteractor";
import { INTERFACE_TYPE } from "../../utils";

@injectable()
export class UserInteractor implements IUserInteractor {
  repository: IUserRepository;
  constructor(
    @inject(INTERFACE_TYPE.UserRepository) repository: IUserRepository
  ) {
    this.repository = repository;
  }

  async getUsers(): Promise<User[]> {
    return await this.repository.findAll();
  }

  createUser(user: User): Promise<User> {
    return this.repository.create(user);
  }
  updateUser(user: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  deleteUser(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
