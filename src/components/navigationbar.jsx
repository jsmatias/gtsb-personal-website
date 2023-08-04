import React, { useState } from "react";
import { styled } from "styled-components";

const NavBar = styled.nav`
  padding: 1rem 2rem;
  background: gray;
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
  text-decoration: none;
  color: white;
  display: block;
  float: left;
  padding: 0.5rem 1.5rem;
  &:hover {
    transition: background-color 0.5s;
    background-color: black;
  }
`;

const MenuButton = styled.button`
  color: white;
  background: gray;
  display: block;
  float: right;
  border: none;
  font-size: 2rem;
  &:hover {
    transition: background-color 0.5s;
    background-color: black;
  }
`;

function NavigationBar() {
  const [isNavbarExpanded, setIsNavbarExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  return (
    <NavBar className={`navbar${isNavbarExpanded ? "-expanded" : ""}`}>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/research">Research</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/cv">Resume</NavItem>
      <MenuButton onClick={toggleSidebar}>
        {isNavbarExpanded ? `\u2715` : `\u2630`}
      </MenuButton>
    </NavBar>
  );
}

export default NavigationBar;
