import express from "express";
import itemController from "../controllers/itemController.js";

const itemRouter = express.Router();

itemRouter.get("", itemController.getItemById);
itemRouter.post("/", itemController.createItem);
itemRouter.put("/", itemController.updateItem);
itemRouter.delete("/", itemController.deleteItem);

itemRouter.get("/getAll", itemController.getAllItems);

export default itemRouter;
