import { graphql } from "gatsby"
import React from 'react'
import Projects from "../components/Projects.jsx"
import Layout from "../layouts/Layout.jsx"

const Project = ({ data }) => {
    return (
        <Layout>
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


   