import React, { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import ContactPage from "./pages/ContactPage";
import ChangeProfile from "./pages/ChangeProfile";
import UserProfile from "./pages/UserProfile.js";
import TopicPage from "./pages/TopicPage";
import Topics from "./pages/Topics.js";
import Users from "./pages/Users";
import Account from "./pages/Account";
import AddPost from "./pages/AddPost";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import setAuthenticationToken from "./middleware/setAuthenticationToken";
import { userLoaded } from "./actions/authActions/userLoaded";
import IsLoggedInRoute from "./routes/IsLoggedInRoute";
import PrivateRoute from "./routes/PrivateRoute";
import "./App.css";
import ChangePassword from "./pages/ChangePassword";

import AlbumList from "./components/images/AlbumList";
import AddAlbum from "./components/images/AddAlbum";
import UploadImage from "./components/images/UploadImage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Forget from './forgetPassword/forget';
import StripPays from './strip/stripePays';
// import SocialSignin from "./socialSigin";
// import WebRtc from './webRtc/webRtc';
import Recapcha from './recapcha/recapcha';
import RadioBtn from './radio/radioBtn';
import UserForm from './stepForm/userForm';
import ReactShare from './sharejs/reactShare';
import Paginations from './paginations/paginations';
import SnapSort from './snapSort/snapsort';

if (localStorage.getItem("token")) {
  setAuthenticationToken(localStorage.getItem("token"));
}

const App = () => {
  useEffect(() => {
    store.dispatch(userLoaded());
  }, []);
  return (
    <Router>
      <Provider store={store}>
        <ToastContainer />
        <Navbar />
        <Switch>
          <Route path="/" exact component={LandingPage} />
          <Route path="/contact-us" exact component={ContactPage} />
          <Route path="/users" exact component={Users} />
          <Route path="/topics" exact component={Topics} />
          <Route path="/users/user/:user_id" exact component={UserProfile} />
          <Route path="/topics/topic/:topic_id" exact component={TopicPage} />
          <IsLoggedInRoute path="/register" exact component={RegisterPage} />

          <Route path="/AlbumList" exact component={AlbumList} />
          <Route path="/add" exact component={AddAlbum} />

          <Route path="/upload/:id" exact component={UploadImage} />
          <Route path="/forget" exact component={Forget} />
          <Route path="/stripePays" exact component={StripPays} />
          {/* <Route path="/socialSigin" exact component={SocialSignin} /> */}
          {/* <Route path="/webRtc" exact component={WebRtc} /> */}
          <Route path="/recapcha" exact component={Recapcha} />
          <Route path="/radioBtn" exact component={RadioBtn} />
          <Route path="/userForm" exact component={UserForm} />
          <Route path="/reactShare" exact component={ReactShare} />
          <Route path="/paginations" exact component={Paginations} />
          <Route path="/snapsort" exact component={SnapSort} />

          <IsLoggedInRoute path="/login" exact component={LoginPage} />
          <PrivateRoute
            path="/change-password"
            exact
            component={ChangePassword}
          />
          <PrivateRoute path="/dashboard" exact component={Dashboard} />
          <PrivateRoute path="/add-post" exact component={AddPost} />
          <PrivateRoute
            path="/change-profile"
            exact
            component={ChangeProfile}
          />
          <PrivateRoute path="/account" exact component={Account} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
