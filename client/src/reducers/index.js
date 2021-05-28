import { combineReducers } from "redux";
import users from "./usersReducer";
import posts from "./postsReducer";
import auth from "./authReducer";
import albumReducer from "./albumReducer";

export default combineReducers({
  users,
  posts,
  auth,
  album: albumReducer,
});
