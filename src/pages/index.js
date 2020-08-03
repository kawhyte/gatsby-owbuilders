import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"


import SiteMetadata from "../components/SiteMetadata"

import WhatWeDoSection from "../components/WhatWeDoSection"
import Services from "../components/Services"
import Projects from "../components/Projects"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of OW Builders" />
 
      <Hero />
      <WhatWeDoSection /> 
       
      <Services />
  

      
      
   
      </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
