import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button, FormControl, Form } from 'react-bootstrap';

const NavbarLinks = ({ isLoggedIn, logOut }) => {
  return (
    <div style={{ width: '100%' }}>
      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>

          <Nav className="mr-auto">
            <Nav.Link><Link to="/users" className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              <i className="fas fa-users"></i></Link>Users</Nav.Link>

            <Nav.Link><Link to="/topics" className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              <i className="fas fa-comments"></i></Link>Topics</Nav.Link>

            <Nav.Link><Link to="/login" className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "none" : "flex" }}>Log In</Link></Nav.Link>

            <Nav.Link><Link to="/register"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "none" : "flex" }}>Sign Up</Link></Nav.Link>

            <Nav.Link><Link to="/account"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              <i className="fas fa-address-card"></i>
            </Link>Account</Nav.Link>

            <Nav.Link><Link to="/dashboard"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              <i className="fas fa-user"></i>
            </Link>Dashboard</Nav.Link>

            <Nav.Link><Link to="/add-post"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              <i className="fas fa-edit"></i>
            </Link>Add question</Nav.Link>

            <Nav.Link><Link to="/login"
              className="href__style__remove nav__link"
              onClick={() => logOut()}
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              <i className="fas fa-sign-out-alt"></i>
            </Link>Log Out</Nav.Link>

            <Nav.Link><Link to="/AlbumList">Uploads</Link></Nav.Link>
            <Nav.Link><Link to="/socialSigin">Social Login</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarLinks;
