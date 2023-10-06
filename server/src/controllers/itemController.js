import ItemSchema from "../models/item.js";
import mongoose from "mongoose";

export default {
  async getAllItems(req, res) {
    ItemSchema.find({}, function(err, items) {
      var itemMap = {};

      items.forEach(function(item) {
        itemMap[item._id] = item;
      });

      res.send(itemMap);
    });
  },

  async getItemById(req, res) {
    // check if the id exits in the params
    if (!req.params.id) {
      res.status(400).send({
        message: "ID missing",
      });
    }
    // check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      res.status(400).send({
        message: "ID not valid",
      });
    }
    ItemSchema.findById(req.params.id, function(err, item) {
      if (err) return next(err);
      res.send(item);
    });
  },

  async createItem(req, res, next) {
    const item = new ItemSchema({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
    });
    item.save(function(err) {
      if (err) {
        return next(err);
      }
      res.send("Item Created successfully");
    });
  },

  async deleteItem(req, res, next) {
    //check if the id exits in the params
    if (!req.query.id) {
      res.status(400).send({
        message: "ID missing",
      });
    }
    //check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
      res.status(400).send({
        message: "ID not valid",
      });
    }
    ItemSchema.findByIdAndRemove(req.query.id, function(err) {
      if (err) return next(err);
      res.send("Deleted successfully!");
    });
  },

  async updateItem(req, res) {
    ItemSchema.findByIdAndUpdate(req.query.id, {$set: req.body}, function(
      err,
      item
    ) {
      if (err) return next(err);
      res.send("Updated successfully!");
    });
  }
};
