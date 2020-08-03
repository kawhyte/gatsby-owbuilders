import React from "react"
import pool from "../images/house.jpg"

function Hero() {
  return (
   
    <div class="lg:relative overflow-hidden bg-blue-100">
    <div class="container mx-auto bg-blue-100 ">
      <div class="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
       {/* <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
  
        {/* <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
           <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start">
      

           </nav>
  </div> */}
  


  
        <main class="bg-white py-20 mt-10 mx-auto px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
          <div class="sm:text-center lg:text-left">
            <h2 class="text-4xl tracking-tight leading-10 font-extrabold text-gray-900 sm:text-5xl sm:leading-none md:text-6xl">
            Architectural  
              <br class="xl:hidden" />
              <span class="text-red-400"> Project Management </span>
            </h2>
            <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Working with both clients and contractors to develop plans, set schedules and timelines, and complete projects according to time and budget expectations for Residential & Commercial Buildings.
            </p>
            <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div class="rounded-md shadow">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-red-400 hover:bg-gray-900 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  View Portfolio
                </a>
              </div>
              <div class="mt-3 sm:mt-0 sm:ml-3">
                <a href="#" class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-700 bg-indigo-100 hover:text-gray-600 hover:bg-indigo-50 focus:outline-none focus:shadow-outline-indigo focus:border-indigo-300 transition duration-150 ease-in-out md:py-4 md:text-lg md:px-10">
                  Contact
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div class="absolute lg:inset-y-0 lg:right-0 lg:w-1/2 ">
      <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" src={pool} alt="" />
    </div>
  </div>

  )
}

export default Hero

