import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import AuthService from '../../services/AuthService';

const MemberNav = (props) => {
  const { isOpen, setIsOpen } = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    AuthService.SignOut();
  };

  return (
    <div>
      <Navbar light expand="md">
        <NavbarBrand href="/">My Recipe Box</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/newrecipe">New Recipe</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/mealplan">Meal Plan</NavLink>
            </NavItem>

            <NavItem>
              <NavLink href="/" onClick={logOut}>
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default MemberNav;
