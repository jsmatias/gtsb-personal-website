import React from "react";
import Layout from "../../layout/layout";
import TextBlock from "../../components/textblock";
import Divider from "../../components/divider";
import styled from "styled-components";
import tableImage from "../../images/phd-table-view.png";

const Img = styled.img`
  max-width: 100%;
  text-align: center;
`;

const ResearchMyPhD = () => (
  <Layout>
    <TextBlock
      title="My PhD Journey"
      textString={`
        Let me guide you through my journey during my PhD. When my friends, who are not in academia, inquire about my PhD, our conversation typically follows a familiar trajectory. Initially, I delve into the purpose of my project, the experiments conducted, and the software development involved. However, confusion often arises when they ask, "But what do you study?" anticipating details about traditional classroom modules. Surprisingly, the classroom component constitutes only a small portion of a PhD journey. In my case, the program required me to earn credits equivalent to three modules, but these were not specific to physics. One module focused on designing solutions or improvements to biomedical devices, while another was related to writing a strong scientific paper.  
      `}
    />
    <TextBlock
      textString={`
        The PhD experience varies based on research areas and countries, but generally speaking, formal lectures play a minor role during these four years. My journey included diverse activities such as training sessions, tutoring undergraduates, engaging in outreach activities, participating in a student chapter, contributing to event organisation, attending international conferences and summer schools, writing papers and the thesis, and, of course, conducting research for my project.
      `}
    />
    <TextBlock
      textString={`
        If I were to visualise how these activities were distributed over the years, it might resemble this:
      `}
    />
    <Img src={tableImage} alt="An overview of my PhD." />
    <TextBlock
      textString={`
        This distribution isn't universal for every PhD student, but certain aspects are common. In the following sections, I'll provide a broad overview of my project and summarise the extra activities in which I was involved.
      `}
    />
    <TextBlock
      subtitle={"Research Project"}
      textString={`
        The research project constitutes the core and most demanding part of the PhD program. It involves defining the problem, planning the roadmap, executing the plan, testing it, and evaluating the results. This cyclical process, akin to the PDCA cycle (plan-do-check-act) from the 1920s, also resembles the Agile mindset often used in software development. While Agile and PDCA share similarities, Agile focuses more on developing a new product and embracing changes—a fitting analogy for the ever-evolving nature of a PhD project plan.      `}
    />
    <TextBlock
      textString={`
        To provide a better perspective, let me simplify my project. The aim was to develop a novel piece of equipment, or at least a prototype, to accurately quantify the efficiency of a class of nanostructured material in converting low-energy light (near-infrared) to higher energy (e.g., in the blue range of the spectrum). For this purpose, I designed an optical system with two main objectives: guiding the laser light through the sample and collecting the emitted light. After completing the design, optical components, sensors, and cameras were purchased and assembled in the lab (something like a LEGO). The entire system was connected to a central computer, where software developed by me controlled it and collected data. Rigorous tests were conducted, and the sample could finally be characterised.
      `}
    />
    <TextBlock
      textString={`
      Upon successful implementation, I conducted precise experiments to study the material's efficiency and developed a mathematical model to describe its behaviour across a wide range of laser power densities. The results of this study were published in a few papers, but I'll share the most recent one, published in the Nanoscale journal, which summarises my work. 
    `}
    />
    <span>
      <a href="https://pubs.rsc.org/en/content/articlepdf/2024/NR/D3NR03103A">
        "Beam-profile compensation for quantum yield characterisation of Yb–Tm
        codoped upconverting nanoparticles emitting at 474 nm, 650 nm and 804 nm
      </a>
    </span>

    <TextBlock
      subtitle={"Extra Activities"}
      textString={`
      The activities undertaken by PhD students can vary significantly based on location, university, and the specific subject or field of study. While the primary focus of a PhD program is on original research, which involves literature review, writing, publishing, and attending conferences, seminars, summer schools, and workshops, many programs also include teaching and coursework.
    `}
    />
    <TextBlock
      textString={`
      During my PhD, the core of the program, from my perspective, involved developing original research and promoting research dissemination and communication. Extra activities played a crucial role in this process. Students were expected to participate in at least two outreach activities per year, primarily focused on presenting our projects to audiences of various ages. This could range from showcasing the lab to primary or high school students to participating in public events during science festivals, such as the Pint of Science initiative.
    `}
    />
    <TextBlock
      textString={`
      Other activities included giving lab demonstrations to undergrad students. The physics department expected students to tutor undergrads for three years during the program. I conducted lab demonstrations for two years to engineering students and later tutored computational physics to physics department students for one semester.
    `}
    />
    <Divider />
  </Layout>
);

export default ResearchMyPhD;
