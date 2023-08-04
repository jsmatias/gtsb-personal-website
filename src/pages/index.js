import React from "react";
import Layout from "../layout/layout";
// import TextBlock from '../components/textblock';
// import '../style/global.css'

const IndexPage = () => (
  // <Layout visitcard={true}>
  <Layout visitcard={true}>
    Test
    {/* <TextBlock 
      title = "Let me introduce myself"
      subtitle = "🔬 My PhD Research"
      textString = {`Currently, I’m working on a PhD project in Biophotonics at the Tyndall
      National Institute, Cork - Ireland, which comprises on building an novel opto-electronic equipment to measure 
      the efficiency of a class of nanoparticles that up-convert light in a process similar to fluorescence. 
      Please, have a look at the Research page to know more about it. 
      `}
    />

    <TextBlock
      subtitle = "💻 Programming"
      textString = {`I'm also passionate with programming. During my master's I started using Python for 
      data analysis as an alternative to a graphical software called Origin due to incompatibilities with Ubuntu
      that was my operational system at that time. It turned out that I loved it and kept using Python ever since.
      Working as Data analyst, I got interest in other programming languages, and I started to hop on 
      side projects involving languages and frameworks other than python, such as this simple webpage developed with 
      Gatsby (a JavaScript framework).
      `}
    />

    <TextBlock
      subtitle = "📈 Finance"
      textString = {`A third personal interest is the financial market. And this is the best part because I can use Python 
        to analyse and test strategies of investment and trades on different equities of the stock market. If you're curious about 
        these side projects, have a look at the Projects page. 
      `}
    /> */}
  </Layout>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
