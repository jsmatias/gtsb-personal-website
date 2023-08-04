import React from "react";
import Layout from "../layout/layout";
import TextBlock from "../components/textblock";
import "../layout/layout.css";

const IndexPage = () => (
  <Layout visitcard={true}>
    <TextBlock
      title="Let me introduce myself"
      subtitle="🔬 My exciting Researcher career"
      textString={`I embarked on a diverse research journey, beginning with a physics degree specializing in quantum mechanics
      and condensed matter physics. During my master's, I explored the fascinating nexus of quantum mechanics and nanotechnology, 
      engaging in projects focused on solid crystal synthesis and characterization. 
      My Ph.D. propelled me into the world of opto-electronics, where I crafted a complex device to unveil the mysteries 
      of nanoparticles converting invisible light to visible.

      Driven by a passion for coding and curiosity, my trajectory shifted towards artificial intelligence. 
      Collaborating with the groundbreaking AI4Europe project, I now find myself at the confluence of research and industry, 
      poised to uncover transformative discoveries. This narrative of exploration continues, 
      as I stand poised to illuminate uncharted realms of knowledge. 
      `}
    />

    <TextBlock
      subtitle="💻 Exploring the Code World"
      textString={`Oh, let's talk about my digital alter ego – the coding enthusiast! 
      My coding journey started during my master's when I stumbled upon Python. 
      It all began as a workaround for compatibility issues with my trusty Ubuntu OS, 
      which had a little feud with the graphical software I used.
      As fate would have it, Python charmed its way into my heart, and we've been inseparable ever since. 
      My career as a Data Analyst further stoked my curiosity, 
      nudging me to venture into the realms of different programming languages and frameworks. 
      From side gigs to passion projects, I've dabbled in languages beyond Python's embrace.
      
      And hey, remember this nifty webpage you're exploring? It's more than just text and visuals 
      – it's a product of my affair with Gatsby, a slick JavaScript framework that adds that extra zing to web development. 
      Ready for more coding adventures? Buckle up, because there's so much more to come! 🚀
      `}
    />

    <TextBlock
      subtitle="📈 Exploring the Financial World"
      textString={`
      Now, let's dive into the thrilling realm of the financial market! 
      I have a keen interest in understanding its ever-changing dynamics. 
      The best part? I get to harness the power of Python to analyze and test investment strategies and trades across 
      various equities of the stock market.
      Curious about these financial side quests? I've documented some exciting projects on the "Projects" page, 
      where you can peek into my financial journey. From crunching numbers to making informed decisions, 
      it's a realm where data-driven insights meet the world of investments.
      Join me on this adventure into the heart of numbers and watch this space for more captivating financial escapades! 📊 
      `}
    />
  </Layout>
);

export default IndexPage;

export const Head = () => <title>Home Page</title>;
