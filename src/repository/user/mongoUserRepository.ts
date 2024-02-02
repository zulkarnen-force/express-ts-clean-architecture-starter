import mongoose, { Schema } from "mongoose";
import { IUserRepository } from "./IUserRepository";
import { User } from "../../entity/User";
import { injectable } from "inversify";
@injectable()
export class MongoUserRepository implements IUserRepository {
  schema = Schema<User>;
  model: mongoose.Model<User>;
  constructor() {
    const schema = new Schema<User>({
      name: String,
      email: String,
      password: String,
    });
    this.model = mongoose.model<User>("User", schema);
  }
  create(user: User): Promise<User> {
    return this.model.create(user);
  }
  findById(id: number): Promise<any> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<User[]> {
    return this.model.find();
  }
  delete(id: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}
