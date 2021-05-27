const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
  name: { type: String, required: true, },
  lastName: { type: String, required: true, },
  userName: { type: String, required: true, unique: true, },
  email: { type: String, required: true, unique: true, },
  password: { type: String, required: true, },
  avatar: { type: String, },
});

module.exports = UserSchema = mongoose.model("user", UserSchema);
