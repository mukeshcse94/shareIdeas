const express = require("express");
const router = express.Router();
const authentication = require("../middleware/authentication");
const getUserByMiddleware = require("../controllers/userControllers/getUserByMiddleware");
const getUserByEmail = require("../controllers/userControllers/getUserByEmail");
const getUsers = require("../controllers/userControllers/getUsers");
const getUserById = require("../controllers/userControllers/getUserById");
const registerUser = require("../controllers/userControllers/registerUser");
const loginUser = require("../controllers/userControllers/loginUser");

const {
  registerUserValidator,
  loginUserValidator,
  searchUserByUsernameValidator,
  changeUserDataValidator,
  checkActualPasswordValidator,
  changeUserPasswordValidator,
} = require("../middleware/express-validator/expressValidator");

const searchUserByUsername = require("../controllers/userControllers/searchUserByUsername");
const changeUserData = require("../controllers/userControllers/changeUserData");
const checkActualPassword = require("../controllers/userControllers/checkActualPassword");
const changeUserPassword = require("../controllers/userControllers/changeUserPassword");


router.get("/", authentication, getUserByMiddleware);

router.get("/get_user_by_email/:user_email", getUserByEmail);

router.get("/users", getUsers);

router.get("/get_user_by_id/:user_id", getUserById);

router.post("/register", registerUserValidator, registerUser);

router.post("/login", loginUserValidator, loginUser);

router.put("/search_by_username", searchUserByUsernameValidator, searchUserByUsername);

router.put("/change_user_data/:user_data_to_change",
  authentication,
  changeUserDataValidator,
  changeUserData
);

router.put(
  "/check_acutal_password",
  authentication,
  checkActualPasswordValidator,
  checkActualPassword
);

router.put(
  "/change_user_password",
  authentication,
  changeUserPasswordValidator,
  changeUserPassword
);


module.exports = router;
