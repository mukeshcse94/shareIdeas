const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const {
  createPostValidator,
  searchForPostValidator,
  addCommentValidator,
} = require("../middleware/express-validator/expressValidator");
const getPosts = require("../controllers/postControllers/getPosts");
const getMostLikedPosts = require("../controllers/postControllers/getMostLikedPosts");
const getPostsByDate = require("../controllers/postControllers/getPostsByDate");
const getMostCommented = require("../controllers/postControllers/getMostCommented");
const getSinglePost = require("../controllers/postControllers/getSinglePost");
const getUserPostsByMiddleware = require("../controllers/postControllers/getUserPostsByMiddleware");
const getUserPostsById = require("../controllers/postControllers/getUserPostsById");
const createPost = require("../controllers/postControllers/createPost");
const searchForPost = require("../controllers/postControllers/searchForPost");
const addLike = require("../controllers/postControllers/addLike");
const addComment = require("../controllers/postControllers/addComment");
const likeComment = require("../controllers/postControllers/likeComment");
const removePost = require("../controllers/postControllers/removePost");
const removeLikeFromPost = require("../controllers/postControllers/removeLikeFromPost");
const removeComment = require("../controllers/postControllers/removeComment");
const removeLikeFromComment = require("../controllers/postControllers/removeLikeFromComment");


router.get("/posts", getPosts);

router.get("/posts/most_liked", getMostLikedPosts);

router.get("/posts/the_most_recent", getPostsByDate);

router.get("/posts/the_most_commented", getMostCommented);

router.get("/single_post/:post_id", getSinglePost);

router.get("/user_posts/:user_id", getUserPostsById);

router.get("/user_posts", authentication, getUserPostsByMiddleware);

router.post("/", authentication, createPostValidator, createPost);

router.put("/search_for_post", searchForPostValidator, searchForPost);

router.put("/likes/:post_id", authentication, addLike);

router.put("/add_comment/:post_id", authentication, addCommentValidator, addComment);

router.put("/like_comment/:post_id/:comment_id", authentication, likeComment);

router.delete("/delete_post/:post_id", authentication, removePost);

router.delete("/remove_like_from_post/:post_id/:like_id", authentication, removeLikeFromPost);

router.delete("/remove_comment/:post_id/:comment_id", authentication, removeComment);

router.delete(
  "/remove_like_from_comment/:post_id/:comment_id/:like_id",
  authentication,
  removeLikeFromComment
);


module.exports = router;
