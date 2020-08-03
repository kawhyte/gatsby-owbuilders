import React from 'react'
import Cards from "../components/Cards"

function Projects({data}) {
    console.log("TEST ", data)
    return (
        <div className="bg-white">
        <h1 className="text-md pt-8 pb-2 px-8 lg:pb-1 container text-md text-red-400 font-bold leading-none mb-3 uppercase ">Portfolio</h1>
          {data.portfolio && data.portfolio.nodes.length > 0 ? (
            <Cards items={data.portfolio.nodes} />
          ) : (
            <div className="container">No portfolio items found.</div>
          )}
        </div>
    )
}

export default Projects
