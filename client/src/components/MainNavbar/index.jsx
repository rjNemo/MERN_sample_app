import React, { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import {
  Collapse,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
} from "reactstrap";
import SignOutButton from "../SignOutButton";
import * as ROUTES from "../../constants/routes";

const MainNavbar = ({ authUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="dark" dark expand="sm">
      <Container>
        <NavbarBrand>
          <Link to={authUser ? ROUTES.APP : ROUTES.LANDING}>App</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {authUser && (
              <NavItem>
                <NavLink>
                  <Link to={ROUTES.ACCOUNT}>Account</Link>
                </NavLink>
              </NavItem>
            )}
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
            <NavItem>
              <NavLink>
                {authUser ? (
                  <SignOutButton />
                ) : (
                  <Link to={ROUTES.SIGN_IN}>Sign In</Link>
                )}
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
};

MainNavbar.propTypes = {
  authUser: PropTypes.any.isRequired,
};

export default MainNavbar;
