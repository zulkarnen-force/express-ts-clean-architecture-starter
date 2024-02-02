import { injectable } from "inversify";
import { User } from "../../entity/User";
import { IUserRepository } from "./IUserRepository";

@injectable()
export class MemoryUserRepository implements IUserRepository {
  private _users: User[] = [];

  create(user: User): Promise<User> {
    this._users.push(user);
    return Promise.resolve(user);
  }
  findById(id: number): Promise<User | null> {
    const user = this._users.find((u) => u.id === id);
    if (!user) {
      return Promise.resolve(null);
    }
    return Promise.resolve(user);
  }
  findAll(): Promise<User[]> {
    return Promise.resolve(this._users);
  }
  delete(id: number): Promise<void> {
    const index = this._users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this._users.splice(index, 1);
    }
    return Promise.resolve();
  }
}
