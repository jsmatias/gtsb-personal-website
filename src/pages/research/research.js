import React from "react";
import Layout from "../../layout/layout";
import TextBlock from "../../components/textblock";
import Divider from "../../components/divider";

const Research = () => (
  <Layout>
    <TextBlock title="Navigating the Cosmos: A Physicist's Journey from Quantum Mechanics to AI Innovation" />
    <Divider />
    <TextBlock
      textString={`
        Welcome! Here, I'll share insights into the research projects that have captivated my attention over the last couple of years. 
        But before we dive into that, allow me to share a brief story. If you're more interested on my PhD instead, 
        feel free to skip straight to My PhD Journey subpage 🚀. 
    `}
    />
    <TextBlock
      textString={`
        My journey into research began with a physics degree specialising in quantum mechanics and condensed matter physics. 
        During my master's, I explored deeper into quantum mechanics and nanotechnology, contributing to projects focused on solid crystal synthesis and characterisation. 
        The pursuit of a Ph.D. led me into the realm of photonics, where I designed and constructed an opto-electronic device. 
        This device was dedicated to characterising the efficiency of nanoparticles that convert invisible near-infrared light into higher-energy light, 
        typically in the visible blue range.
    `}
    />
    <TextBlock
      textString={`
      From an early age, I've been passionate about science fiction and understanding the universe. The original TV series, Cosmos, produced by Carl Sagan, was a key inspiration for my career in Physics. Even during my intense study sessions to join a competitive federal university in Brazil, I made time to interrupt my studies at 9 pm to watch the show. It significantly influenced my decision to continue studying Physics and revealed the vastness of the unknown that awaited me.
    `}
    />
    <TextBlock
      textString={`
      Fast forward to my bachelor's conclusion, and I joined the Quantum Materials Group, led by Prof. Marcus Avila. Under the guidance of Prof. Raquel Ribeiro, I delved into the fascinating world of experimental quantum Physics, exploring material science. In this group, I learned to synthesise materials in a lab, studying their structures and properties, including magnetic, electric, and thermal aspects at temperatures as low as a few Kelvin. This experience deepened my interest in concepts like Heisenberg’s uncertainty and Shrödinger’s cat, though we'll save that for another discussion.
    `}
    />
    <TextBlock
      textString={`
      A pivotal move took me to Ireland as part of an exchange program funded by the Brazilian Government, studying at University College Dublin (UCD). During the summer, I joined the Nanophotonics group, where I assembled optical components to build a Raman system and a microscope for measuring the blinking effect of Quantum dots. Through the microscope lenses, these tiny particles sparkled like stars in a dark sky, far from the light pollution of cities.
    `}
    />
    <TextBlock
      textString={`
      Upon returning to Brazil, I continued research on upconverting nanoparticles, a promising material for applications in various fields, from enhancing solar panel efficiency to detecting and treating cancerous cells. During this period, I co-authored my first paper, a significant milestone. This material became the driving force behind my return to Ireland for my Ph.D.
    `}
    />
    <TextBlock
      textString={`
      In my Ph.D., I dedicated myself to building an opto-electronic system to characterise the efficiency of upconverting nanoparticles. This involved converting invisible light (near-infrared range) to higher-energy light (visible region). Leveraging my experience in Python development, I developed software to control and automate the entire data acquisition and analysis process. The result was a finely tuned system, allowing high-resolution characterisations and the discovery of a non-linear mathematical model explaining their emission behaviour under different excitation power densities.
    `}
    />
    <TextBlock
      textString={`
      Skipping ahead to today, post-Ph.D. in Physics, I decided to dedicate more time to sharpening my coding skills. Joining the Insight Centre for Data Analytics at University College Cork (UCC), I am part of a European project focused on AI. In the era of AI hype, one of the main concerns is trustworthiness. My current role involves studying and developing algorithms to automatically classify and score research papers, addressing concerns such as experimental reproducibility.
    `}
    />
    If you've made it this far, why not check out{" "}
    <a href="/research/my-phd-journey">My PhD Journey</a>? I'll explore more
    details about photonics and the activities undertaken during my 4-year Ph.D.
    journey. Put on your goggles and let's go! 👨‍🔬
  </Layout>
);

export default Research;
