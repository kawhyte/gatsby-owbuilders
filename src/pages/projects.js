import { graphql } from "gatsby"
import React from 'react'
import Projects from "../components/Projects.jsx"
import Layout from "../layouts/Layout.jsx"
import SiteMetadata from "../components/SiteMetadata"

const Project = ({ data }) => {
    return (
        <Layout>
        <SiteMetadata title="Projects" description="Projects for OW Builders" />
        <div>
             <Projects data ={data} />
        </div>
        </Layout>
    )
}

export default Project

export const query = graphql`
  query ProjectQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`


   