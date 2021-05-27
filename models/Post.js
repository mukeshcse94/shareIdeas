const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let PostSchema = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user", },
  name: { type: String, required: true, },
  lastName: { type: String, },
  userName: { type: String, },
  avatar: { type: String, },
  date: { type: Date, default: Date.now(), },
  textOfThePost: { type: String, required: true, },
  likes: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user", },
    },
  ],
  comments: [
    {
      user: { type: mongoose.Schema.Types.ObjectId, ref: "user", },
      name: { type: String, required: true, },
      avatar: { type: String, },
      textOfTheComment: { type: String, },
      date: { type: Date, default: Date.now(), },
      likes: [
        {
          user: { type: mongoose.Schema.Types.ObjectId, ref: "user", },
        },
      ],
    },
  ],
});


const PostModel = mongoose.model("post", PostSchema);
module.exports = PostModel;

