import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import { styled } from "styled-components";
// import './App.css';

const NavBar = styled.nav`
  padding: 1rem 2rem;
  background: gray;
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
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

function NavigationBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <NavBar className={`navbar${isSidebarOpen ? "-expanded" : ""}`}>
      <NavItem href="/">Home</NavItem>
      <NavItem href="/research">Research</NavItem>
      <NavItem href="/projects">Projects</NavItem>
      <NavItem href="/cv">Resume</NavItem>
    </NavBar>
  );
}

export default NavigationBar;
