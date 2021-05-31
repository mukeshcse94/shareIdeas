import React from "react";
import successity from "../successity.png";
import { Link } from "react-router-dom";
// import SocialSignin from '../socialSigin';
import StripPays from '../strip/stripePays';


const LandingPage = () => {
  return (
    <div className="landing-wrapper">
      <div className="text-wrapper">
        <div className="text-header-wrapper">
          <p className="text-header font__p p__size">Welcome in</p>
          <span>ShareIdeas! </span>
        </div>
        {/* <SocialSignin /> */}
        <div className="text-section font__p p__size">
          It is new forum about achieving success
          <br />
          If You are looking for answers on questions like:
          <ul>
            <li>How to start my business?</li>
            <li>How to grow company?</li>
            <li>How to improve yourself every day</li>
            <li>or You just want to share Your story</li>
          </ul>

          <div className="text-button-wrapper">
            <Link to="/register">Register in</Link> and add post!
          </div>
        </div>
        <Link to="/userForm">confirm</Link>
        <br />
        <Link to="/paginations">Paginations</Link>
        <br />
        <Link to="/snapsort">SnapSort</Link>
        <br />
        <Link to="/AlbumList">Uploads</Link>
        <br />
        <Link to="/socialSigin">Social Login</Link>
      </div>
      <div className="image-wrapper">
        <img src={successity} className="landing-image" alt="" />
      </div>

      <StripPays />
    </div>
  );
};

export default LandingPage;
