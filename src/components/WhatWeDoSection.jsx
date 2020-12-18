import React from "react"
import manDrawing from "../images/large_drawing.jpg"
import blueprint from "../images/greenhouse.jpg"

function WhatWeDoSection() {
  return (
    <section className="bg-white md:mt-10 lg:mt-0 ">
      <div className="container max-w-5xl mx-auto md:mt-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className=" lg:text-md text-red-700 font-bold leading-none mb-3 uppercase">
              About Us
            </h3>
            <p className="text-gray-600 text-base  lg:text-lg">
              For each project we establish relationships with partners who we
              know will help us create added value for your project. As well as
              bringing together the public and private sectors, we make
              sector-overarching links to gather knowledge and to learn from
              each other. We work with both clients and contractors to develop
              plans, set schedules and timelines, and complete projects
              according to time and budget expectations.
              <br />
              <br />
            </p>
          </div>
          <div className="w-full sm:w-1/2 pb-1 mb-12 lg:mb-20 lg:pt-8 rounded-3xl">
          
            <img
              className="w-full  sm:h-auto mx-auto"
              src={blueprint}
              alt="Blueprint"
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default WhatWeDoSection
