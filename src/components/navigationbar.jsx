import React, { useState } from "react";
import { styled } from "styled-components";
import { colors } from "../layout/layout-config";


const NavBar = styled.nav`
  padding: 1rem 2rem;
  background: ${colors.black};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  &.navbar-expanded {
    display: grid;
  }
`;

const NavItem = styled.a`
  @media screen and (max-width: 700px) {
    display: none;
  }
  text-transform: uppercase;
  font-weight: bold;
  font-size: 1rem;
  letter-spacing: 5px;
  text-decoration: none;
  color: ${colors.white};
  display: block;
  float: left;
  padding: 0.5rem 1.5rem;
  &:hover {
    transition: background 0.5s;
    background: ${colors.gray};
  }
  &.navitem-expanded {
    display: block;
    transition: height 0.5s;
  }
`;

const MenuButton = styled.button`
  @media screen and (min-width: 700px) {
    display: none;
  }
  color: ${colors.white};
  background: ${colors.black};
  display: block;
  float: right;
  border: none;
  font-size: 2rem;
  &:hover {
    transition: background 0.5s;
    background: ${colors.gray};
  }
`;

function NavigationBar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <NavBar className={`navbar${isNavbarExpanded ? "-expanded" : ""}`}>
      <NavItem
        className={`navitem${isNavbarExpanded ? "-expanded" : ""}`}
        href="/"
      >
        Home
      </NavItem>
      <NavItem
        className={`navitem${isNavbarExpanded ? "-expanded" : ""}`}
        href="/research"
      >
        Research
      </NavItem>
      <NavItem
        className={`navitem${isNavbarExpanded ? "-expanded" : ""}`}
        href="/projects"
      >
        Projects
      </NavItem>
      <NavItem
        className={`navitem${isNavbarExpanded ? "-expanded" : ""}`}
        href="/cv"
      >
        Resume
      </NavItem>
      <MenuButton onClick={toggleSidebar}>
        {isNavbarExpanded ? `\u2715` : `\u2630`}
      </MenuButton>
    </NavBar>
  );
}

export default NavigationBar;
