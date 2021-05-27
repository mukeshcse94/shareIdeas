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
            <Nav.Link><Link to="/users" className="href__style__remove nav__link">Users
            <i className="fas fa-users"></i></Link></Nav.Link>

            <Nav.Link><Link to="/topics" className="href__style__remove nav__link">Topics
            <i className="fas fa-comments"></i></Link></Nav.Link>

            <Nav.Link><Link to="/login" className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "none" : "flex" }}>Log In</Link></Nav.Link>

            <Nav.Link><Link to="/register"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "none" : "flex" }}>Sign Up</Link></Nav.Link>

            <Nav.Link><Link to="/account"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              Account <i className="fas fa-address-card"></i>
            </Link></Nav.Link>

            <Nav.Link><Link to="/dashboard"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              Dashboard <i className="fas fa-user"></i>
            </Link></Nav.Link>

            <Nav.Link><Link to="/add-post"
              className="href__style__remove nav__link"
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              Add question <i className="fas fa-edit"></i>
            </Link></Nav.Link>

            <Nav.Link><Link to="/login"
              className="href__style__remove nav__link"
              onClick={() => logOut()}
              style={{ display: isLoggedIn ? "flex" : "none" }}>
              Log Out <i className="fas fa-sign-out-alt"></i>
            </Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavbarLinks;
