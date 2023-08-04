import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import SideBar from "./sidebar";
import { colors } from "../layout/layout-config";

const MainNavWraper = styled.div`
  @media screen and (max-width: 600px) {
    border: 0;
    text-align: right;
    box-sizing: content-box;
  }
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  height: 3.5rem;
  background: ${colors.black};
  padding: 0rem;
  border-bottom: 3px solid ${colors.gray};
  box-sizing: content-box;
  .hamburguer {
    @media screen and (max-width: 600px) {
      display: block;
      padding-top: 6px;
      height: 56px;
      border-bottom: 3px solid ${colors.gray};
      background: ${colors.black};
    }
    position: fixed;
    z-index: 2;
    height: 55px;
    width: 100%;
    display: none;
    overflow-y: hidden;
    padding: 9px;
    box-sizing: border-box;
    height: 100%;
    margin: 0 auto;
    font-size: 36px;
    text-decoration: none;
    color: ${colors.white};
    transition: color 0.7s;
    &:hover {
      transition: color 0.7s;
      color: ${colors.gray};
    }
  }
`;

const MainNav = styled.nav`
  @media screen and (max-width: 600px) {
    display: none;
  }
  display: block;
  height: 3.5rem;
  .mainNav__list {
    display: flex;
    align-items: center;
    max-width: 800px;
    justify-content: space-around;
    background-color: transparent;
    list-style: none;
    margin: auto;
    padding: 0rem;
  }
  .mainNav__item {
    background-size: 100% 6rem;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1rem;
    letter-spacing: 5px;
    height: 3.5rem;
    width: 100%;
    margin: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    transition: background-color 0.7s;
    &:hover {
      transition: background-color 0.7s;
      background-color: gray;
    }
    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 100%;
      color: ${colors.white};
    }
  }
`;
const Displacement = styled.div`
  height: 55px;
`;

class Header extends React.Component {
  state = {
    sidebarVisible: false,
  };
  render() {
    return (
      <Displacement>
        <MainNavWraper>
          <Link
            to="#"
            className="hamburguer"
            onClick={() =>
              this.setState((prevState) => ({
                sidebarVisible: !prevState.sidebarVisible,
              }))
            }
          >
            {this.state.sidebarVisible ? `\u2715` : `\u2630`}
          </Link>
          <SideBar show={this.state.sidebarVisible} />
          <MainNav>
            <ul className="mainNav__list">
              <li className="mainNav__item">
                <Link to="/">Home</Link>
              </li>
              <li className="mainNav__item">
                <Link to="/research">Research</Link>
              </li>
              <li className="mainNav__item">
                <Link to="/projects">Projects</Link>
              </li>
              <li className="mainNav__item">
                <Link to="/cv">Resume</Link>
              </li>
            </ul>
          </MainNav>
        </MainNavWraper>
      </Displacement>
    );
  }
}

export default Header;
