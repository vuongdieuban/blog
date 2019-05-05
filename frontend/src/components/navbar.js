import React from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../dist/img/bitcan_logo.jpg";

const NavBar = () => {
  return (
    <Navbar className="" bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand href="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
      </Link>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Nav.Link href="/">Home</Nav.Link>
          </Link>
          <Link to="/about-us">
            <Nav.Link href="/about-us">About</Nav.Link>
          </Link>

          <NavDropdown title="Services" id="basic-nav-dropdown">
            <Link to="service/oil">
              <NavDropdown.Item href="service/oil">Oil</NavDropdown.Item>
            </Link>
            <Link to="/service/research">
              <NavDropdown.Item href="/service/research">
                Research
              </NavDropdown.Item>
            </Link>
            <Link to="/service/simulation">
              <NavDropdown.Item href="/service/simulation">
                Simulation
              </NavDropdown.Item>
            </Link>
          </NavDropdown>
        </Nav>

        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
