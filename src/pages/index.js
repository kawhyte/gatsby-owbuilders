import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"
import WhatWeDo from "../components/WhatWeDo"
import WhatWeDoSection from "../components/WhatWeDoSection"
import Services from "../components/Services"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of OW Builders" />

      <Hero />
      <WhatWeDoSection /> 
       

      <div className="bg-gray-100 ">
      <h1 className="text-md pt-8 pb-2 lg:pb-1 container text-md text-gray-800 font-bold leading-none mb-3 uppercase ">Portfolio</h1>
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No portfolio items found.</div>
        )}
      </div>
      <Services />
      <WhatWeDo />
      <Newsletter />
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
