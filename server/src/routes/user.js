import express from "express";
import userController from "../controllers/userController.js";

const userRouter = express.Router();
// create end point where id is a parameter
userRouter.get("/", userController.getUserById);
userRouter.get("/getAll", userController.getAllUsers);
userRouter.post("/", userController.createUser);

export default userRouter;
