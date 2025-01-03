import React from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import logo from "../assets/logos.jpeg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "transparent", boxShadow: "none" }}
    >
      <Container>
        <Navbar.Brand
          as={Link}
          to="/"
          style={{ display: "flex", alignItems: "center" }}
        >
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="d-inline-block align-top me-2"
          />
          <span style={{ fontSize: "1.5rem", fontWeight: 500 }}>Firepath</span>
        </Navbar.Brand>
        <Link
          to="/login"
          className="links-container"
          style={{
            color: "#000",
            fontWeight: "400",
          }}
        >
          Log in
        </Link>
      </Container>
    </Navbar>
  );
}

export default Header;
