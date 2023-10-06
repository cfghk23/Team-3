import mongoose from "mongoose";
import UserSchema from "../models/user.js";

export default {
  async getUserById(req, res, next) {
    // check if the id exits in the params
    if (!req.query.id) {
      res.status(400).send({
        message: "ID missing",
      });
    }
    // check if the id is valid
    if (!mongoose.Types.ObjectId.isValid(req.query.id)) {
      res.status(400).send({
        message: "ID not valid",
      });
    }

    UserSchema.findById(req.query.id, function (err, user) {
      if (err) return next(err);
      res.send(user);
    })
  },
  async getAllUsers(req, res, next) {
    UserSchema.find({}, function(err, users) {
      var userMap = {};
  
      users.forEach(function(user) {
        userMap[user._id] = user;
      });
  
      res.send(userMap);  
    });
  },
  
  async createUser(req, res, next) {
    const user = new UserSchema({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    //check if email already in database
    if (mongoose.Types.ObjectId.isValid(req.query.email)) {
      res.status(400).send({
        message: "Email exists",
      });
    }
    user.save(function (err) {
      if (err) {
        res.status(400).send({
          message: "Error creating user",
          error: err,
        });
      }
      res.send("User Created successfully");
    });
  },
};
