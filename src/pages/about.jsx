import React from 'react';
import { Link } from 'react-router-dom';
import Footer from '../partials/Footer';
import FeaturesBg3 from '../images/1.jpg';
import Slider from "react-slick";


import Header from '../partials/Header';

function SignIn() {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 5,
    slidesToScroll: 4,
    arrows:false,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      }
    ]
  };
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">

      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
      <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-[35vh]">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover" data-aos="zoom-y-out" 
            style={{
              backgroundImage:
                "url('https://www.celigo.com/wp-content/uploads/the-differences-between-a-hris-and-erp-whats-best-for-hr-banner.jpg')",
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-80 bg-cyan-600"
            ></span>
          </div>
          <div className="container relative mx-auto">
            <div className="items-center flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                
              </div>
            </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
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
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>
          
        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto" data-aos="zoom-y-out" data-aos-delay="300">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <h1>hey</h1>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our Vission 
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    We’re on a mission to build a better future where technology creates good jobs and marvelous labor-saving inventions for everyone. 
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-cyan-500 w-full mb-8 shadow-lg shadow-cyan-600 rounded-lg">
                  <div className="px-4 py-5 flex-auto" data-aos="zoom-y-out">
                    <div className="text-red-400 bg-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400" data-aos-delay="300">
                     <h1>hey2</h1>
                    </div>
                    <h6 className="text-xl text-white font-semibold">
                      What are we 
                    </h6>
                    <p className="mt-2 mb-4 text-white">
                      Teachers can encourage students for any skill or value
                      whether it's working hard, being kind, helping others or
                      Even Sending Their Result To Their Parents
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto" data-aos="zoom-y-out" data-aos-delay="300" >
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                     <h1>hey3</h1>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Our Mission
                    </h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    We’re on a mission to build a better future where technology creates good jobs and marvelous 
                    labor-saving inventions for everyone.
                    </p>
                  </div>
                </div>
              </div>
            </div>
        <section className='text-center px-24 py-16'>
          <div className="pr-12 ">
                  <h1 className="text-cyan-700 text-3xl mt-2 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out" data-aos-delay="400">
                    Company
                  </h1>
                  <p className="mt-4 text-base text-gray-800 mb-8" data-aos="zoom-y-out" data-aos-delay="400" > 
                  Infinite consulting is a technology solution provider company situated in Addis Ababa, 
                  Ethiopia. We’re on a mission to build a better future where technology creates good jobs and marvelous labor-saving inventions for everyone. 
                  Committed to deliver innovative and reliable solutions to meet our clients needs with utmost quality and unwavering ethics. 
                  We always try to enhance efficiency, productivity and capability of businesses by delivering 
                  the services above &beyond industry values and customer expectations.
                  </p>
                </div>
          </section>
          <section className='text-center bg-gray-100 w-full py-16 '>
          <div className="pr-12 ">
                  <h1 className="text-cyan-700 text-2xl mt-2 font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out" data-aos-delay="400">
                    We are innovative provider of digital technology solutions
                  </h1>
                  <p className="px-32 mt-4 text-base text-gray-500 mb-8" data-aos="zoom-y-out" data-aos-delay="400" > 
                  A team of specialist with skills in enterprise resourse planning business 
                  procecss automation finance sales human capital managment and procurment who worked 
                  in the market for total of 30 years laid the foundation for infinite consulting plc in addis Ababa
                  Ethiopia in 2019.since its genesis and for more than 30 years we have assisted business and we known brands in reimaging
                  their industried through digitalization. our teams specialized mic of 
                  expertise in software development, infrastructure maintainance and technology consulting enable us to deliver 
                  much more than just functional solution
                  
                  </p>
                  <div className='flex flex-row mt-24'>
                  <div className="basis-1/2">
                      <h1 className="text-cyan-700 text-2xl mt-2 font-extrabold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out" data-aos-delay="400">
                      Team Utilization
                      </h1>
                       <p className="px-32 mt-2 text-base text-gray-500 mb-8 text-left	" data-aos="zoom-y-out" data-aos-delay="400" > 
                       Utilize our on-demand talents and resources to oversee the timely attainment of your goals. Our skilled IT staff, 
                       which specializes in multiple technologies, can effortlessly collaborate with your team to reach business objectives through short and long-term engagements. 
                       With our established, dependable, and professional expertise, clients can easily scale-up projects to achieve advantage over competitors.
                  
                      </p>
                  </div>
                  
                   <div className="basis-1/2">
                      <h1 className="text-cyan-700 text-2xl mt-2 font-extrabold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out" data-aos-delay="400">
                         Estimated Cost
                      </h1>
                       <p className="px-32 mt-2 text-base text-gray-500 mb-8 text-left	" data-aos="zoom-y-out" data-aos-delay="400" > 
                        Fixed Price Our implementation of Fixed scope comprises accurate estimates and tailored solutions that meet the needs. 
                         You may take use of our multi-domain expertise experience to establish projects from the ground up and have a budget for your efforts that is well defined. 
                        Our skilled team offers a fixed cost quotation based on your specific requirements, and the project is completed in stages.
                  
                      </p>
                  </div>
                  </div>
                  
                </div>
                </section>
                <section className='flex flex-row'>
                  <div className='basis-1/2 flex flex-col'>
                    <div className='basis-1/3' ></div>
                    <div className='basis-1/3 text-left'><h1 className="text-left text-cyan-700 text-2xl mt-2 px-32 font-extrabold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out" data-aos-delay="400">
                         Why in-finite Consulting
                      </h1>
                       <p className="px-32 mt-2 text-base text-gray-500 mb-8 text-left	" data-aos="zoom-y-out" data-aos-delay="400" > 
                       To provide leading IT services for Ethiopian enterprises, we draw on our depth of knowledge and pool of qualified resources. 
                       We have been successful in maintaining the confidence our consumers have in us over time and creating enduring relationships.

                      </p>
                    </div  >
                    <div className='basis-1/3'></div>
                  
                  </div>
                  <div className='basis-1/2 flex flex-col' >
                        <div className='h-48 w-[75vh] m-2 border  rounded-md shadow-lg border-gray-200 hover:w-[76vh] p-10'  data-aos="zoom-y-out" data-aos-delay="400" >
                          <h1 className='text-cyan-700' >All-In-One Approach</h1>

                           <p className='mt-6'>With a specialized team of professionals for numerous industrial sectors and technologies, we provide complete IT services, design, and development, and quality assurance.</p>   
                        </div>
                        <div className='h-48 w-[75vh] m-2 border  rounded-md shadow-lg border-gray-200 hover:w-[76vh] p-10'  data-aos="zoom-y-out" data-aos-delay="400" >
                            <h1 className='text-cyan-700' >All-In-One Approach</h1>

                            <p className='mt-6'>With a specialized team of professionals for numerous industrial sectors and technologies, we provide complete IT services, design, and development, and quality assurance.</p>   


                        </div>
                        <div className='h-48 w-[75vh] m-2 border  rounded-md shadow-lg  border-gray-200 hover:w-[76vh] p-10' data-aos="zoom-y-out" data-aos-delay="400" >
                          <h1 className='text-cyan-700' >All-In-One Approach</h1> 

                          <p className='mt-6'>With a specialized team of professionals for numerous industrial sectors and technologies, we provide complete IT services, design, and development, and quality assurance.</p>   

                        </div>
                  </div>

                </section>
                <section className=' w-full h-[70vh]'>
                    <div className=' p-10' >
                    <h1 className="text-cyan-700  text-center text-3xl mt-2 font-bold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out" data-aos-delay="400">Our Core Value</h1>
                    
                    </div>
                    <div className='grid grid-cols-2 gap-4 mx-20' >
                      <div className='w-full h-[30vh] mx-2 p-2 px-6' >
                        <div>
                            <h1 className='text-cyan-700 text-xl mt-3' >Quality Oriented</h1>  
                             <h2 className='text-gray-700' > We guarantee outstanding quality delivered on scheduled way that meets your expectations, according to our cutting-edge technical expertise.</h2>
                        </div>
                      </div>
                      <div className='w-full h-[30vh] mx-2 p-2 px-6'>
                            <h1 className='text-cyan-700 text-xl mt-3'> Quality Oriented</h1>  
                             <h2> We guarantee outstanding quality delivered on scheduled way that meets your expectations, according to our cutting-edge technical expertise.</h2>
                        
                      </div>
                      <div className='w-full h-[30vh] mx-2 p-2 px-6'>
                            <h1 className='text-cyan-700 text-xl mt-3'> Quality Oriented</h1>  
                             <h2> We guarantee outstanding quality delivered on scheduled way that meets your expectations, according to our cutting-edge technical expertise.</h2>
                        
                      </div>
                      <div className='w-full h-[30vh] mx-2 p-2 px-6'>
                            <h1 className='text-cyan-700 text-xl mt-3'> Quality Oriented</h1>  
                             <h2> We guarantee outstanding quality delivered on scheduled way that meets your expectations, according to our cutting-edge technical expertise.</h2>
                        
                      </div> 

                    </div>
                </section>


                <section className='bg-gray-100 w-full h-[65vh]'>
                
                    <div className=' p-10' >
                    <h1 className="text-cyan-700  text-center text-3xl mt-2 font-bold leading-tighter tracking-tighter mb-2" data-aos="zoom-y-out" data-aos-delay="400">Meet the Team </h1>
                    </div>
                  <div >
                  <Slider className="flex flex-row space-x-4 " {...settings} >
                        <div className='w-full h-[85vh] mx-2 p-2 px-6' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className='w-full h-[85vh] mx-2 p-2' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className='w-full h-[85vh] mx-2 p-2' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className='w-full h-[85vh] mx-2 p-2' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className='w-full h-[85vh] mx-2 p-2' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className='w-full h-[85vh] mx-2 p-2' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        <div className='w-full h-[85vh] mx-2 p-2' >
                            <div className='flex flex-col space-y-3 p-1 border border-gray-200 bg-white shadow-lg object-cover py-4'>
                              <img className='border border-blue-600 border-3 h-32 flex mx-20 rounded-full  w-32 text-center object-cover' src={FeaturesBg3} alt="pic" ></img>
                              <span className='text-center text-gray-900 font-semibold text-lg' >  Mr Abenezer Tesema</span>
                              <span className='text-center text-sm text-gray-600 mx-6' >manging bla and bla and bla of the bla bla bla aadwa awd dwad wad awdwu whjdkawd  dadhk wdwda adwad </span>
                              <span className='text-center text-gray-800 font-semibold text-base' >Senior MM Consultant</span>
                              <div className='mx-16' >
                              <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
                                  <li>
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:bg-cyan-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Twitter">
                                      <svg className="w-8 h-8 fill-current hover:bg-cyan-600" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M24 11.5c-.6.3-1.2.4-1.9.5.7-.4 1.2-1 1.4-1.8-.6.4-1.3.6-2.1.8-.6-.6-1.5-1-2.4-1-1.7 0-3.2 1.5-3.2 3.3 0 .3 0 .5.1.7-2.7-.1-5.2-1.4-6.8-3.4-.3.5-.4 1-.4 1.7 0 1.1.6 2.1 1.5 2.7-.5 0-1-.2-1.5-.4 0 1.6 1.1 2.9 2.6 3.2-.3.1-.6.1-.9.1-.2 0-.4 0-.6-.1.4 1.3 1.6 2.3 3.1 2.3-1.1.9-2.5 1.4-4.1 1.4H8c1.5.9 3.2 1.5 5 1.5 6 0 9.3-5 9.3-9.3v-.4c.7-.5 1.3-1.1 1.7-1.8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Github">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                                      </svg>
                                    </Link>
                                  </li>
                                  <li className="ml-4">
                                    <Link to="#" className="flex justify-center items-center text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out" aria-label="Facebook">
                                      <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                                      </svg>
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                        </div>
                        
                        </Slider>
                  </div>
                
                
                
                </section>
                </div>
          
                 </section>
      </main>
       {/*  Site footer */}
       <Footer />

    </div>
  );
}

export default SignIn;