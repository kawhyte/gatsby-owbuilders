import React from 'react'
import manDrawing from '../images/man_drawing.jpg'
import blueprint from '../images/blueprint.jpg'

function WhatWeDoSection() {
    return (
        <section class="bg-white py-8">
        <div class="container max-w-5xl mx-auto m-8">
            <div class="w-full mb-4">	
                <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
            </div>
        
            <div class="flex flex-wrap">
                <div class="w-5/6 sm:w-1/2 p-6">
                    <h3 class="text-md text-red-400 font-bold leading-none mb-3 uppercase">What we do</h3>
                    <p class="text-gray-600 mb-8 text-3xl">Working with both clients and contractors to develop plans, set schedules and timelines, and complete projects according to time and budget expectations.<br /><br />
                    </p>
                    
                </div>
                <div class="w-full sm:w-1/2 p-1 pt-12">
    
    
                <img
                  className="w-full sm:h-auto mx-auto"
                  src={blueprint}
                //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
                  alt="Contacts"
                />
                </div>
         
            </div>
            
            
 
        </div>
    </section>
    )
}

export default WhatWeDoSection
