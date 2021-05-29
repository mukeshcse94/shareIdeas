const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");


const Post = new mongoose.Schema({
  text: String,
  title: String,
});


router.get("/", async (req, res, next) => {
  const PAGE_SIZE = 3;
  const page = parseInt(req.query.page || "0");
  const total = await Post.countDocuments({});
  const posts = await Post.find({})
    .limit(PAGE_SIZE)
    .skip(PAGE_SIZE * page);
  res.json({
    totalPages: Math.ceil(total / PAGE_SIZE),
    posts,
  });
});


module.exports = router;

