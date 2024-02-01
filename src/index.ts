import express, { Express } from "express";
import { UserRoutes } from "./routes/userRoutes";
import connection from "./databases/connection";
import mongoose from "mongoose";
const app: Express = express();
const port = 2341;
app.use("/users", UserRoutes);
app.listen(2341, () => {
  console.log(`server started at http://localhost:${port}`);
});
connection(
  mongoose,
  {
    mongo: {
      uri: "mongodb://root:supersecret@localhost:27020/clean?authSource=admin",
    },
  },
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
).connectToMongo();
