import React from "react";
import styled from "styled-components";
import background from "../images/background.jpg";
import headshot from "../images/headshot.jpg";
import "@fontsource/josefin-sans";
import { Link, StaticQuery, graphql } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { colors } from "../layout/layout-config";

const VisitCardParent = styled.div`
  @media screen and (max-width: 600px) {
    background-size: 150%;
    background-repeat: no-repeat;
    background-position: 86% 7%;
  }
  background-image: url(${background});
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: 60% 54%;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0rem;
  position: relative;
  top: 3rem;
`;
const VisitCardWraper = styled.div`
  @media screen and (max-width: 600px) {
    height: 32rem;
  }
  font-family: "Josefin Sans", Arial, sans-serif;
  background: rgba(0, 0, 0, 0.7);
  border-bottom: 0.1rem solid #828282;
  margin: 0 auto;
  padding: 0rem;
  height: 30rem;
`;
const Circle = styled.div`
  @media screen and (max-width: 600px) {
    margin: 5% auto;
  }
  width: 8.5rem;
  height: 8.5rem;
  margin: 0.9rem auto;
  border-radius: 50%;
  border: 0.1rem solid #ffffff;
  background: #828282;
  box-sizing: content-box;
  position: relative;
  overflow: hidden;
  img {
    display: inline;
    margin: 0 auto;
    height: 100%;
    width: auto;
    object-fit: cover;
  }
`;
const TitleWraper = styled.div`
  @media screen and (max-width: 600px) {
    .titleName {
      max-width: 300px;
      letter-spacing: 2px;
      font-size: 3.4rem;
    }
    .titleIntro {
      font-size: 1.4rem;
    }
    .name {
      font-size: 4rem;
    }
    .titleDetails {
      font-size: 1.4rem;
    }
  }

  color: white;
  text-align: center;
  padding: 5%;
  box-sizing: border-box;
  height: 100%;

  .titleIntro {
    padding: 5px;
    font-size: 1.6rem;
    display: block;
  }
  .titleName {
    font-size: 3.8rem;
    display: block;
    border-bottom: 0.1rem solid #828282;
    padding: 0;
    margin: 0 auto;
    width: fit-content;
    letter-spacing: 3px;
  }
  .name {
    font-weight: bold;
    font-size: 4.2rem;
  }
  .titleDetails {
    display: block;
    font-size: 1.6rem;
    padding: 0.2rem;
  }
`;
const Contact = styled.div`
  margin: 0 auto;
  width: 10rem;
  color: #ffffff;
  text-align: center;
  padding: 1rem;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: transparent;
  list-style: none;
  padding: 0rem;
  .mainNav__item {
    align-items: stretch;
    width: 100%;
    height: 1.3rem;
    margin: auto;
    display: flex;
    align-items: stretch;
    justify-content: center;
    &: hover {
      color: white;
    }
    & > a {
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      width: 100%;
      color: ${colors.gray};
      &: hover {
        color: ${colors.white};
      }
    }
  }
`;

const ContactDetails = ({ label, data }) => (
  <List>
    <li className="mainNav__item">
      <Link to={data.site.siteMetadata.linkedin}>
        <FontAwesomeIcon
          icon={faLinkedin}
          style={{ maxHeight: "1rem", overflow: "hidden" }}
        />
      </Link>
    </li>
    <li className="mainNav__item">
      <Link to={data.site.siteMetadata.github}>
        <FontAwesomeIcon
          icon={faGithub}
          style={{ maxHeight: "1rem", overflow: "hidden" }}
        />
      </Link>
    </li>
    <li className="mainNav__item">
      <a href={`mailto:${data.site.siteMetadata.email}`}>
        <FontAwesomeIcon
          icon={faEnvelope}
          style={{ maxHeight: "1rem", overflow: "hidden" }}
        />
        {label ? `. Email` : null}
      </a>
    </li>
  </List>
);

const VisitCard = () => (
  <StaticQuery
    query={graphql`
      {
        site {
          siteMetadata {
            name
            profession
            email
            linkedin
            github
          }
        }
      }
    `}
  >
    {(data) => {
      return (
        <VisitCardParent className={"instaFade"}>
          <VisitCardWraper className={"quickFade delayFive"}>
            <TitleWraper>
              <Circle>
                <img src={headshot} alt="Jean Matias" title="Jean Matias" />
              </Circle>
              <span className="titleIntro">Hi, there!</span>
              <span className="titleName">
                I'm <span className="name">{data.site.siteMetadata.name}</span>
              </span>
              <span className="titleDetails">
                {data.site.siteMetadata.profession}
              </span>
              <Contact>{<ContactDetails label={false} data={data} />}</Contact>
            </TitleWraper>
          </VisitCardWraper>
        </VisitCardParent>
      );
    }}
  </StaticQuery>
);

export default VisitCard;
