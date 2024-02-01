"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemoryUserRepository = void 0;
class MemoryUserRepository {
    constructor() {
        this._users = [];
    }
    create(user) {
        this._users.push(user);
        return Promise.resolve(user);
    }
    findById(id) {
        const user = this._users.find((u) => u.id === id);
        if (!user) {
            return Promise.resolve(null);
        }
        return Promise.resolve(user);
    }
    findAll() {
        return Promise.resolve(this._users);
    }
    delete(id) {
        const index = this._users.findIndex((u) => u.id === id);
        if (index !== -1) {
            this._users.splice(index, 1);
        }
        return Promise.resolve();
    }
}
exports.MemoryUserRepository = MemoryUserRepository;
