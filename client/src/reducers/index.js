import { combineReducers } from "redux";
import users from "./usersReducer";
import posts from "./postsReducer";
import auth from "./authReducer";

export default combineReducers({
  users,
  posts,
  auth,
});
