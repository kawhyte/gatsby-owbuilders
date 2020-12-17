import React from "react"
import { Link } from "gatsby"
import pool from "../images/house.jpg"

function Hero() {
  return (
   
    <div className="lg:relative overflow-hidden bg-blue-100">
    <div className="container mx-auto bg-blue-100 ">
      <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">

        <main className="bg-white py-20 mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left">
            <h2 className="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Architectural  
              <br className="xl:hidden" />
              <span className="text-red-400"> Project Management </span>
            </h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Make your dream residential home or commercial building a reality
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-400 hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  View Projects
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-indigo-100 hover:text-gray-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
      <img className="kenburns-top h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={pool} alt="" />
   
      </div>
  </div>

  )
}

export default Hero

