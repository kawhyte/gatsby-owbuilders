import React from "react"
import Cards from "../components/Cards"

function Projects({ data }) {
  return (
    <div className="bg-white ">
      <h1 className="text-md pb-2 pt-20 px-8 lg:pb-1 container text-md text-accentColor uppercase text-md sm:text-md leading-tight font-bold tracking-tight mb-8 ">
        Latest Projects
      </h1>
      {data.portfolio && data.portfolio.nodes.length > 0 ? (
        <Cards items={data.portfolio.nodes} />
      ) : (
        <div className="container">No portfolio items found.</div>
      )}
    </div>
  )
}

export default Projects
