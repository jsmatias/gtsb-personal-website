import React from "react";
import Layout from "../layout/layout";
import TextBlock from "../components/textblock";
import "../layout/layout.css";

const IndexPage = () => (
  <Layout visitcard={true}>
    <TextBlock
      title="Let me introduce myself"
      textString={`Hello! I'm Jean Matias, Physicist and developer with a diverse background on research, data analysis, and web development. 
      `}
    />
    <TextBlock
      textString={`
        I hold a multi-disciplinary bachelor's degree in Science & Technology and a specialised bachelor's degree in Physics. 
        In my multi-disciplinary education, I studied a variety of courses ranging from Information Theory to Quantum Mechanics, 
        not neglecting Organic Chemistry and Epistemological Philosophy of Modern Science. Upon specialising in Physics, 
        I directed my career towards Software Engineering with an emphasis on Python development, and Experimental Physics, 
        earning a Master's in Condensed Matter Physics and a Ph.D. in Photonics.
      `}
    />
    <TextBlock
      textString={`
        Fuelled by a passion for coding and curiosity, my trajectory shifted toward artificial intelligence and development. 
        Currently collaborating on the European project AI4Europe, I find myself at the confluence of research and innovation. 
        My work involves contributing to the development of a platform (AI-on-Demand - AIoD) aimed at facilitating access 
        to data and AI development for the broader AI community.
      `}
    />
    Learn more about my research journey reading my{" "}
    <a href="/research/research">Research</a> page.
  </Layout>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
