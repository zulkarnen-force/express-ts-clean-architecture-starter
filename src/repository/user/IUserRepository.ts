import { User } from "../../entity/User";

export interface IUserRepository {
  create(user: User): Promise<User>;
  findById(id: number): Promise<User | null>;
  findAll(): Promise<User[]>;
  delete(id: number): Promise<void>;
}
