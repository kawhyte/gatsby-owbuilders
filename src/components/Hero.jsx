import React from "react"
import { Link } from "gatsby"
import pool from "../images/house.jpg"
import house from "../images/house2.jpg"

function Hero() {
  return (
   
    <div className="overflow-hidden ">   
    <div className="container mx-auto  ">
      <div className="absolute  z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-3xl lg:w-full lg:pb-28 xl:pb-32">

        <main className=" py-20 mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div className="sm:text-center lg:text-left ">
            <h2 className="text-4xl tracking-tight  leading-10 font-extrabold text-white sm:text-5xl sm:leading-none md:text-6xl">
            Architectural  
              <br className="xl:hidden" />
              <span className="text-white"> Project Management </span>
            </h2>
            <p className="font-mono mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-2xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Make your dream residential home or commercial building a reality.
            </p>
            <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <Link to="projects" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-700 hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out  uppercase">
                  Projects we've done
                </Link>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a href="about" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-indigo-100 hover:text-gray-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out  uppercase">
                  Who we are
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div className="image-container  dark-img hero  w-full ">
      <img className="w-full kenburns-top object-cover sm:h-72 md:h-96 lg:w-full h-auto " src={house} alt="" />


      </div>
  </div>

  )
}

export default Hero


