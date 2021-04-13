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
      <main className="">
        <div
          className="relative  flex content-center items-center justify-center"
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
          <div className=" mt-20 relative mx-auto ">
            <div className="items-center flex flex-wrap sm:px-24 ">
              <div className="w-full lg:w-10/12 px-4 ml-auto mr-auto text-center">
                <div className="pr-12">
                  <h1 className="mb-6 text-white font-extrabold text-4xl md:text-4xl ">
                    Architecture & Design
                  </h1>
                  <p className="mt-4 mb-6 font-bold text-xl md:text-2xl text-gray-300 ">
                    Make your dream residential home or commercial building a
                    reality.
                  </p>

                  <h2 className="text-xl tracking-tight leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-4xl">
                    {/*<Typical
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
                      />*/}
                  </h2>

                  <Link to="/projects">
                    <button
                      className={
                        "bg-accentColor text-white  active:bg-gray-100" +
                        " text-xs font-bold px-4 py-4 rounded-lg shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <i className="fas fa-arrow-alt-circle-down"></i>View
                      Projects
                    </button>
                  </Link>
                  <Link to="/projects">
                    <button
                      className={
                        "bg-white text-accentColor  active:bg-gray-100" +
                        " text-xs font-bold px-4 py-4 rounded-lg shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                      }
                      type="button"
                      style={{ transition: "all .15s ease" }}
                    >
                      <i className="fas fa-arrow-alt-circle-down"></i>Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Hero
