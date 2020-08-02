import React from 'react'
import builder from "../images/bermuda-builders.png"
import building from "../images/bermuda-252.png"
import drawing from "../images/bermuda-graphic-designer-is-working-on-the-computer.png"


function WhatWeDo() {
    return (
        <div className='bg-white'>
        <section className='container min-w-0 mx-auto mb-12 mt-20 '>
            <div className='mx-20 mt-10  sm:mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3'>
                <section className='m-4 rounded-lg border bg-white shadow-lg overflow-hidden'>
                <div className='hidden md:block'>
                <img
                alt='Man with a laptop'
                className='block mx-auto mb-4 w-auto h-40'
                src={builder}
                />
                </div>
                <p className='text-lg text-center sm:m-5 md:text-md font-Montserrat uppercase bg-orange-200 p-1 '>
                Project Management
                </p>
                    <div className='p-5 break-words text-gray-700 text-md font-light font-Montserrat'>
                    Project management is a critical practice that applies knowledge of process, skills, tools, deliverables, and techniques to project activities to ensure a solid path to project success by meeting goals and requirements.
                    </div>
                </section>
                <section className='m-4  rounded-lg border bg-white shadow-lg overflow-hidden'>
                <div className='hidden md:block mt-8'>
                    <img
                        alt='Man in space'
                        className='block mx-auto mb-4   w-40 h-32'
                        src={building}
                    />
                </div>
                    <p className='text-lg sm:m-5 text-center md:text-md font-Montserrat uppercase bg-orange-200 p-1 '>
                    Working Drawing
                    </p>
                    <div className='p-5 break-words text-gray-700 text-md font-light font-Montserrat'>
                        <span>
                            Working drawings provide graphical, and dimensioned information. This data is used by the contractors to build their work. Working drawing can be in the form of structural drawings, architectural drawings, civil drawings, electrical drawings and mechanical drawings.

                        </span>
                    </div>
                </section>
                <section className='m-4 rounded-lg border bg-white shadow-lg overflow-hidden'>
                <div className='hidden md:block mt-8'>
                <img
                alt='cartoon man head'
                className='block mx-auto mb-4   w-40 h-32 '
                src={drawing}
                />
                </div>
                <p className='text-lg sm:m-5 text-center md:text-md font-Montserrat uppercase bg-orange-200 p-1'>
                Drafting
                </p>
                    <div className='p-5 break-words text-gray-700 text-md font-light font-Montserrat'>
                    Drafting is the visual language of industry, construction and engineering. Drafting services will be able to provide technical drawings for any purpose, including unit developments, extensions, alterations, and Local permit applications and will work across many industries including industrial design, surveying, engineering, construction, mining, and materials handling.
                     
                    </div>
                </section>
            </div>
        </section>
    </div>
    )
}

export default WhatWeDo
