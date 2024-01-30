import React, { useState, useEffect, useRef } from "react";
import { styled } from "styled-components";
import { colors } from "../layout/layout-config";
import "@fontsource/josefin-sans";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faAtom, faTerminal } from "@fortawesome/free-solid-svg-icons";

const NavBar = styled.nav`
  padding: 1rem 2rem;
  background: ${colors.black};
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-sizing: border-box;
  display: flex;
  &.navbar-expanded {
    display: grid;
  }
`;

const NavItem = styled.div`
  @media screen and (max-width: 750px) {
    display: none;
  }
  min-width: 15rem;
  position: relative;
  &.nav-item-expanded {
    display: block;
  }
`;

const NavSubItem = styled.a`
  max-height: 48px;
  overflow: hidden;
  display: block;
  float: left;
  padding: 0.5rem 1.5rem;
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  font-weight: bold;
  font-size: 1rem;
  font-family: "Josefin Sans", Arial, sans-serif;
  letter-spacing: 1px;
  text-decoration: none;
  color: ${colors.white};
  &:hover {
    transition: background 0.5s;
    background: ${colors.gray};
  }
  &.sub-item-heading {
    text-transform: uppercase;
  }
`;

const List = styled.ul`
  @media screen and (max-width: 750px) {
    position: initial;
  }
  transition: max-height 0.3s ease-in;
  overflow: hidden;
  display: grid;
  max-height: ${({ isOpen }) => (isOpen ? "1000px" : "0")};
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 100%; // Position it below the parent item
  left: 0;
  background: ${colors.black};
  width: 100%;
`;

const MenuButton = styled.button`
  @media screen and (min-width: 750px) {
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
  const [isResearchSubMenuOpen, setResearchSubMenuOpen] = useState(false);
  const [isProjectsSubMenuOpen, setProjectsSubMenuOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const closeMenuOnOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsNavbarExpanded(false);
        setResearchSubMenuOpen(false);
        setProjectsSubMenuOpen(false);
      }
    };

    document.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, []);

  const toggleSidebar = () => {
    setIsNavbarExpanded(!isNavbarExpanded);
  };

  const toggleResearchSubMenu = () => {
    setProjectsSubMenuOpen(false);
    setResearchSubMenuOpen(!isResearchSubMenuOpen);
  };

  const toggleProjectsSubMenu = () => {
    setResearchSubMenuOpen(false);
    setProjectsSubMenuOpen(!isProjectsSubMenuOpen);
  };

  return (
    <NavBar
      ref={menuRef}
      className={`navbar${isNavbarExpanded ? "-expanded" : ""}`}
    >
      <NavItem className={`nav-item${isNavbarExpanded ? "-expanded" : ""}`}>
        <NavSubItem className="sub-item-heading" href="/">
          <FontAwesomeIcon icon={faHome} /> {`   `} Home
        </NavSubItem>
      </NavItem>
      <NavItem className={`nav-item${isNavbarExpanded ? "-expanded" : ""}`}>
        <NavSubItem
          className="sub-item-heading"
          onClick={toggleResearchSubMenu}
        >
          <FontAwesomeIcon icon={faAtom} /> {`   `} Research
        </NavSubItem>
        <List isOpen={isResearchSubMenuOpen}>
          <NavSubItem href="/research/research">My Research</NavSubItem>
          <NavSubItem href="/research/my-phd-journey">
            My PhD journey
          </NavSubItem>
          {/* <NavSubItem href="/research/trustworthy-ai">
            Trustworthy AI
          </NavSubItem> */}
        </List>
      </NavItem>
      {/* <NavItem className={`nav-item${isNavbarExpanded ? "-expanded" : ""}`}>
        <NavSubItem
          className="sub-item-heading"
          onMouseOver={toggleProjectsSubMenu}
        >
          <FontAwesomeIcon icon={faTerminal} /> {`   `} Projects
        </NavSubItem>
        <List isOpen={isProjectsSubMenuOpen}>
          <NavSubItem href="/projects/trading-tests">
            Framework for testing trading strategies
          </NavSubItem>
          <NavSubItem href="/projects/aiod">AI on Demand</NavSubItem>
        </List>
      </NavItem> */}
      <MenuButton onClick={toggleSidebar}>
        {isNavbarExpanded ? `\u2715` : `\u2630`}
      </MenuButton>
    </NavBar>
  );
}

export default NavigationBar;
