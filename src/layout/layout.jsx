import { graphql, StaticQuery } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
// import Helmet from 'react-helmet'
import styled from "styled-components";
import Footer from "../components/footer";
import NavigationBar from "../components/navigationbar";
import VisitCard from "../components/visitcard";
import { colors } from "./layout-config";

const Body = styled.div`
  background: ${colors.white};
  margin: auto;
  margin-bottom: 5em;
  margin-top: 5em;
  max-width: 800px;
  min-height: 500px;
  padding: 1.5rem;
`;

const Layout = ({ children, visitcard }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <React.Fragment>
        <NavigationBar />
        {visitcard ? <VisitCard /> : ""}
        <Body>{children}</Body>
        <Footer />
      </React.Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  visitcard: PropTypes.bool,
};

export default Layout;
