import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from "reactstrap";
import * as ROUTES from "../../constants/routes";

export default function MainNavbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="sm">
      <Container>
        <NavbarBrand>
          <Link to={ROUTES.LANDING}>LandingPage</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink>
                <Link to={ROUTES.SIGN_IN}>Sign In</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={ROUTES.APP}>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={ROUTES.ACCOUNT}>Account</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link to={ROUTES.ADMIN}>Admin</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://github.com/rjNemo"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
