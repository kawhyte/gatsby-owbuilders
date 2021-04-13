import { graphql } from "gatsby"
import React from "react"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"
import WhatWeDoSection from "../components/WhatWeDoSection"
import ListWhatWeDo from "../components/ListWhatWeDo"
import Services from "../components/Services"
import Projects from "../components/Projects"
import Feature from "../components/Feature"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Home page for OW Builders" />

      <Hero />
      
      <ListWhatWeDo />
      <WhatWeDoSection />

      <Projects data ={data} />
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
