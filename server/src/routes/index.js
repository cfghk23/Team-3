import userRouter from "./user.js";
import itemRouter from "./item.js";
import express from "express";

const router = express.Router();

router.use("/users", userRouter);
router.use("/items", itemRouter);

export default router;
