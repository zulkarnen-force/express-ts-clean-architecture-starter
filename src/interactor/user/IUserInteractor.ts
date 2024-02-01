import { User } from "../../entity/User";

export interface IUserInteractor {
  getUsers(): Promise<User[] | null>;
  createUser(user: User): Promise<User>;
  updateUser(user: User): Promise<User>;
  deleteUser(id: number): Promise<void>;
}
