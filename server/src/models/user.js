import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique : true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  subscription_type: {
    type: String,
    enum: ["free", "standard", "premium"],
    default: "free",
  },
  // is_deleted: {
  //   type: Boolean,
  //   default: false,
  // },
  // created_at: {
  //   type: Date,
  //   default: Date.now,
  // },
});

const model = mongoose.model("User", UserSchema);

export default model;
