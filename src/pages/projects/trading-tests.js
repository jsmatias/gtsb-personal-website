import React from "react";
import Layout from "../../layout/layout";
import TextBlock from "../../components/textblock";
import image1 from "../../images/trading-pnl.png";
import styled from "styled-components";
import Divider from "../../components/divider";

const Img = styled.img`
  max-width: 100%;
`;

const Projects = () => (
  <Layout>
    <TextBlock
      title="Back-testing strategies for trading on the Stock Market"
      textString={`
      Curious and excited about the intriguing world of the financial markets, I asked myself: what would I do with my first million?
      The quick answer to that was that I would invest it, but I realised that I didn't know how to do it. Then, I started reading about 
      different strategies and approaches of where and to invest, that was when I came across the Stock Market.   
    `}
    />
    <Divider />
    <Img
      src={image1}
      alt="A graph showing the profit results of a simulation over 12 months period on a portfolio including 2 Brazilian companies
        compared to a benchmark."
    />
    <TextBlock
      textString={`Back-test simulation of the profit accumulated over 12 months period. 
      The tested strategy was applied to a portfolio containing 2 Brazilian companies and total profit is compared to 
      BOVA11, as benchmark, which is a weighted basket of the main companies of the BOVESPA index (IBOV).`}
    />
    <Divider />
  </Layout>
);

export default Projects;
