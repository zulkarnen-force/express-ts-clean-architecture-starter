"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userRoutes_1 = require("./routes/userRoutes");
const connection_1 = __importDefault(require("./databases/connection"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
const port = 2341;
app.use("/users", userRoutes_1.UserRoutes);
app.listen(2341, () => {
    console.log(`server started at http://localhost:${port}`);
});
(0, connection_1.default)(mongoose_1.default, {
    mongo: {
        uri: "mongodb://root:supersecret@localhost:27020/clean?authSource=admin",
    },
}, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).connectToMongo();
