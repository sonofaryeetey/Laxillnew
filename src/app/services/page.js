'use client'

import React from 'react'
import Features from '../components/Features'

import { motion } from 'framer-motion'
import Link from 'next/link'
import FeatureTwo from '../components/FeatureTwo'

const Services = () => {
  return (
    <div style={{background:'#f8f6ff'}}>
      <section className='main-services'>
          <div class="custom-shape-divider-bottom-1708963472">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
              <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
              {/* <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path> */}
              <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
          </div>
        {/* <div className='container'>
        <div className='showcase flex pt-20 '>
            <div className="text-holder">
              <h5 className='font-bold md:text-4xl font-extrabold py-6'>Data Collection and Management</h5>
              <p>
                We assist businesses collect , manage ,and organize their
                data.We help set up databases ,ensuring data quality,and implementing data governance practices
              </p>

            </div>
            <div className="img-holder-services">
              <img src="images/serviceshero.png" className='' alt="" />
            </div>
          </div>

        </div> */}

        <div className="container_header">
          <div className="content-new pt-16" >
            <div className='spacer'></div>
            <motion.div className="content-new-text"
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
            >
              <h1>Transform your business with data-driven insights that fuel growth and innovation </h1>
              <p>Unlock the potential of your business through data-driven insights that fuel growth
                and innovation. Empower your company to leverage data for informed decision-
                making, streamlined operations, and accelerated expansion.</p>
              <div>
                <Link href='/Contact'>
                  <motion.button
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{}}
                    className='buttonplane w-full'>Get in touch
                  </motion.button>
                </Link>



                {/* <Link href='/services'>
                            <motion.button
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{}}
                                className='buttonoutline w-full'>Explore
                            </motion.button>
                            </Link> */}
              </div>

            </motion.div>
            <motion.div className="content-new-img services-img"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.85, ease: 'easeOut' }}
            >
              <img src="images/serviceshero.png" alt="heroNew" />
            </motion.div>

          </div>
        </div>

      </section>

      <section className='services-showcase'>
        <div className="container_header">
          <div className="max-w-4xl mt-36 sm:text-center md:mx-auto">
            <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
              Services
            </h3>
            <p className="mt-3 text-gray-600 md:text-xl">
              {`We work with you to understand your needs, design customized solutions, and deliver actionable results. With Laxill, you can transform your business with data-driven insights that fuel growth and innovation.`}
              
            </p>
          </div>
          <Features/>
          <div className=' showcase-holder '>

            <FeatureTwo/>

             <div class="custom-shape-divider-top-1708966046">
              <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
              </svg>
            </div>

           {/* <div className='showcase flex py-10 my-16'>
              <div className="text-holder">
                <h5 className='font-bold md:text-4xl font-extrabold py-6'>Data Collection and Management</h5>
                <p>
                  We assist businesses collect , manage ,and organize their
                  data.We help set up databases ,ensuring data quality,and implementing data governance practices
                </p>

              </div>
              <div className="img-holder-services">
                <img src="images/data-collection.png" className='' alt="" />
              </div>
            </div>

            <div className='showcase flex py-10 my-16'>

              <div className="img-holder-services">
                <img src="images/data-cleaning.png" className='' alt="" />
              </div>

              <div className="text-holder">
                <h5 className='font-bold md:text-4xl font-extrabold py-6'> Data Cleaning and Quality Assurance</h5>
                <p>
                  We help our clients to prepare their raw data by cleaning and
                  normalizing it ensuring accuracy , completeness ,consistency , reliability and readiness for in-depth
                  <analysis></analysis>
                </p>

              </div>
            </div> */}

            <div className='showcase flex py-10 my-16 px-20 '>
              <div className="text-holder">
                <h5 className='font-bold md:text-4xl font-extrabold py-6'>Data Analysis</h5>
                <p>
                  {`Businesses receive assistance in examining their data to uncover valuable insights. This could encompass predictive modeling, statistical analysis, machine learning, or AI techniques. `}
                </p>

              </div>
              <div className="img-holder-services">
                <img src="images/data-analysis2.png" className='' alt="" />
              </div>
            </div>
            <div class="custom-shape-divider-bottom-1709064439">
    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
    </svg>
</div>
          </div>




        </div>


      </section>


    </div>
  )
}

export default Services