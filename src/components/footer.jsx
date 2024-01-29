import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faAtom,
  faTerminal,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../layout/layout-config";

const FooterWrapper = styled.div`
  position: fixed;
  font-family: Helvetica, Arial, sans-serif;
  border-top: 0.1rem solid ${colors.gray};
  letter-spacing: 1.5px;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: ${colors.black};
  padding: 1rem;
  box-sizing: border-box;
`;
const InfoWrapper = styled.div`
  @media screen and (max-width: 810px) {
    grid-template-columns: 1fr;
  }
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 auto;
  max-width: 850px;
`;

const ContactWrapper = styled.ul`
  @media screen and (max-width: 810px) {
    justify-content: center;
  }
  box-sizing: border-box;
  font-size: 0.85rem;
  margin: auto;
  width: 100%;
  height: 100%;
  color: ${colors.gray};
  display: flex;
  background-color: transparent;
  align-items: center;
  justify-content: left;
  padding: 1rem;
  .mainNav__item {
    display: flex;
    justify-content: center;
    padding: 0 0.3rem;
    & > a {
      text-decoration: none;
      width: 100%;
      color: ${colors.gray};
      &: hover {
        color: ${colors.white};
      }
    }
  }
`;

const NavWrapper = styled.ul`
  @media screen and (max-width: 810px) {
    border-right: 0rem;
    justify-content: center;
  }
  box-sizing: border-box;
  font-size: 0.85rem;
  margin: auto;
  width: 100%;
  height: 100%;
  border-right: 0.1rem solid ${colors.gray};
  display: flex;
  align-items: center;
  justify-content: right;
  padding: 1rem;
  .mainNav__item {
    display: flex;
    justify-content: center;
    padding: 0 0.3rem;
    & > a {
      text-decoration: none;
      width: 100%;
      color: ${colors.gray};
      &: hover {
        color: ${colors.white};
      }
    }
  }
`;

const LinkWrapper = styled.div`
  color: ${colors.gray};
  &: hover {
    color: ${colors.white};
  }
`;

const Copyright = styled.div`
  font-size: 0.7rem;
  float: right;
  right: 10px;
  bottom: 6px;
  color: ${colors.gray};
  position: absolute;
`;

const Footer = () => (
  <StaticQuery
    query={graphql`
      query SiteContactQuery {
        site {
          siteMetadata {
            email
            linkedin
            github
            nickname
            lastUpdate {
              year
            }
          }
        }
      }
    `}
    render={(data) => (
      <FooterWrapper>
        <InfoWrapper>
          <NavWrapper>
            <li className="mainNav__item">
              <Link to="/">
                <LinkWrapper>
                  <FontAwesomeIcon icon={faHome} /> {`   `} Home
                </LinkWrapper>
              </Link>
            </li>
            <li className="mainNav__item">
              <Link to="/research">
                <LinkWrapper>
                  <FontAwesomeIcon icon={faAtom} /> {`   `} Research
                </LinkWrapper>
              </Link>
            </li>
            <li className="mainNav__item">
              <Link to="/projects">
                <LinkWrapper>
                  <FontAwesomeIcon icon={faTerminal} /> {`   `} Projects
                </LinkWrapper>
              </Link>
            </li>
          </NavWrapper>
          <ContactWrapper>
            <li className="mainNav__item">
              <Link to={data.site.siteMetadata.linkedin}>
                <LinkWrapper>
                  <FontAwesomeIcon icon={faLinkedin} /> {`   `} LinkedIn
                </LinkWrapper>
              </Link>
            </li>
            <li className="mainNav__item">
              <Link to={data.site.siteMetadata.github}>
                <LinkWrapper>
                  <FontAwesomeIcon icon={faGithub} /> {`   `} Github
                </LinkWrapper>
              </Link>
            </li>
            <li className="mainNav__item">
              <a href={`mailto:${data.site.siteMetadata.email}`}>
                <LinkWrapper>
                  <FontAwesomeIcon icon={faEnvelope} /> {`   `} Email
                </LinkWrapper>
              </a>
            </li>
          </ContactWrapper>
          <Copyright>
            @ {data.site.siteMetadata.lastUpdate.year}{" "}
            {data.site.siteMetadata.nickname}
          </Copyright>
        </InfoWrapper>
      </FooterWrapper>
    )}
  />
);

export default Footer;
