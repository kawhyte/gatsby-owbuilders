import React from "react"
import manDrawing from "../images/large_drawing.jpg"
import blueprint from "../images/greenhouse.webp"
import Typical from "react-typical"

function WhatWeDo() {
  return (
    <section className="bg-gray-100 lg:mt-0 ">
      <div className="container max-w-5xl mx-auto md:pt-8">
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
        </div>
        <div className="flex flex-col">
        <h3 className=" p-6 lg:text-md text-accentColor font-bold leading-none mb-3 uppercase">
          Services we offer
        </h3>
          <div className="container  ">

            <div className="grid grid-cols-2 gap-4  lg:grid-cols-4 text-black tracking-tight leading-10 font-extrabold sm:text-xl sm:leading-none md:text-xl">
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Architecture & Design</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Industrial Designs</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Drafting</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Mechanical Drawings</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Electrical Drawings</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Redesigning</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Architectural Solutions</div>
              <div className="bg-gray-300 sm:text-lg rounded-lg text-center sm:py-3 sm:px-3">Working Drawings</div>
            </div>
          </div>
       
        </div>
      </div>
    </section>
  )
}

export default WhatWeDo
