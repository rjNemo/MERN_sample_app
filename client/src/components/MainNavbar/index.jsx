import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
import {
  selectLoggedIn,
  getAuthUserAsync,
  getTokenAsync,
} from "../../store/sessionSlice";
import SignOutButton from "../SignOutButton";
import * as ROUTES from "../../constants/routes";

const MainNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  //fetch logIn status from store
  const isAuthenticated = useSelector(selectLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAuthUserAsync());
    if (isAuthenticated) dispatch(getTokenAsync());
  }, [dispatch, isAuthenticated]);

  return (
    <Navbar color="dark" dark expand="sm">
      <Container>
        <NavbarBrand>
          <Link to={isAuthenticated ? ROUTES.APP : ROUTES.LANDING}>App</Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {isAuthenticated && (
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
                {isAuthenticated ? (
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

export default MainNavbar;
