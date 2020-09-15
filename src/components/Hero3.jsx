import { Link } from "gatsby";
import React from "react";
import BG from "../images/house.jpg";

const Hero = ({ data }) => (
	<div>
		<main>
			<div
				className='relative pt-16 pb-32 flex content-center items-center justify-center'
				style={{
					minHeight: "75vh",
				}}>
				<div
					className='absolute top-0 w-full h-full bg-center bg-cover'
					style={{
						backgroundImage: `url('${BG}')`,
					}}>
					<span
						id='blackOverlay'
						className='w-full h-full absolute opacity-75 bg-black'></span>
				</div>
				<div className='container relative mx-auto'>
					<div className='items-center flex flex-wrap sm:px-24 '>
						<div className='w-full lg:w-9/12 px-4 ml-auto mr-auto text-center'>
							<div className='pr-12'>
								<h2 className='text-4xl tracking-tight leading-10 font-extrabold text-white sm:text-4xl sm:leading-none md:text-5xl'>
                                Architectural Project Management
								</h2>

								<p className='mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0'>
								Make your dream residential home or commercial building a reality.
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
						</div>
					</div>
				</div>
				<div
					className='top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden'
					style={{ height: "70px", transform: "translateZ(0)" }}>
					<svg
						className='absolute bottom-0 overflow-hidden'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='none'
						version='1.1'
						viewBox='0 0 2560 100'
						x='0'
						y='0'>
						<polygon
							className='text-gray-300 fill-current'
							points='2560 0 2560 100 0 100'></polygon>
					</svg>
				</div>
			</div>

			<section className='relative py-6'>
				<div
					className='bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20'
					style={{ height: "80px", transform: "translateZ(0)" }}>
					<svg
						className='absolute bottom-0 overflow-hidden'
						xmlns='http://www.w3.org/2000/svg'
						preserveAspectRatio='none'
						version='1.1'
						viewBox='0 0 2560 100'
						x='0'
						y='0'>
						<polygon
							className='text-white fill-current'
							points='2560 0 2560 100 0 100'></polygon>
					</svg>
				</div>
			</section>
		</main>
	</div>
);

export default Hero;

export const query = graphql`
	query {
		background: file(relativePath: { eq: "author.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
