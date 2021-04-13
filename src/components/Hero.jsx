import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import BG from "../images/house2.webp"
import Img from "gatsby-image"
import Typical from "react-typical"

function Hero() {
  const data = useStaticQuery(graphql`
    query {
      house: file(relativePath: { eq: "house2.webp" }) {
        childImageSharp {
          fluid(quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  return (
    <div>
      <main>
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{
            minHeight: "75vh",
          }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage: `url('${BG}')`,
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-25 bg-black"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap sm:px-24 ">
              <div className="w-full lg:w-9/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">



                <h1 className="mt-4 mb-8 text-white font-extrabold text-3xl md:text-xl text-gray-300 ">
                Make your dream residential home or commercial building a
                reality.
              </h1>


                  <h2 className="text-xl tracking-tight leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-4xl">
                 
                    <Typical
                      loop={Infinity}
                      wrapper="b"
                      steps={[ 
                        "Architecture & Design", 3000, 
                        "Industrial Designs", 3000, 
                        "Drafting", 2000, 
                        "Mechanical Drawings", 3000, 
                        "Architectural Project Management", 2000, 
                        
                        "Electrical Drawings", 2000, 
                        "Redesigning", 2000, 
                        "Unique Architectural Solutions", 3000,
                      "Working Drawings", 2000]}
                    />
                  </h2>

                
                  <Link to="/projects">
                    <button
                      className={
                        "bg-accentColor text-white  active:bg-gray-100" +
                        " text-xs font-bold uppercase px-4 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <i className="fas fa-arrow-alt-circle-down"></i>View
                      Previous Projects
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="relative py-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px", transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Hero
