import React from 'react'
import Layout from '../layout/layout'
import TextBlock from '../components/textblock'
import Divider from '../components/divider'

const Research = () => (
  <Layout>
    <TextBlock
      title = "My PhD Odyssey: Unraveling the Efficiency of Upconverting Nanoparticles"
      textString = {`
      Buckle up for a journey into the heart of my PhD expedition, 
      where we embarked on an exhilarating quest to uncover the mysteries of upconverting nanoparticles (UCNPs). 
      These microscopic marvels hold the power to transform near-infrared light into vibrant 
      visible light through an enchanting process known as upconversion. 
    `}
    />
    <TextBlock
      textString={`
      UCNPs have proven themselves as versatile superheroes, gracing a multitude of applications – 
      from amplifying the prowess of solar energy systems to revolutionizing biomedical treatment and imaging. 
      Yet, even in their state of the art, UCNPs exhibit a modest upconversion efficiency, 
      often referred to as Quantum Yield (QY).
      `}
    />
    <TextBlock
      textString={`
      The plot thickens as we uncover the challenge of accurately gauging this efficiency. 
      The absence of commercial devices designed to measure the QY of these particles shrouds 
      the path toward crafting novel, enhanced UCNPs in an air of uncertainty.
      `}
    />
    <TextBlock
      textString={`
      Fear not, for in the crucible of my PhD journey, 
      I engineered a groundbreaking solution – the very first opto-electronic device capable 
      of meticulously quantifying the QY of these enigmatic particles. 
      This significant leap forward marks a pivotal moment in the saga of UCNP characterization, 
      poised to pave the way for the creation of new particles boasting unparalleled efficiency.
      `}
    />
    <Divider/>
  </Layout>
)

export default Research