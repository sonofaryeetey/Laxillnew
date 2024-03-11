"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence, useInView, useIsPresent, useAnimation } from 'framer-motion'
import { useRef, useEffect } from 'react'
import bg1 from '../../../public/images/data-analytics1.jpg'
import bg2 from '../../../public/images/data-analytics2.jpg'
import bg3 from '../../../public/images/data-analytics3.jpg'

// initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true }}
//       transition={{ duration: 0.3 }}
//       variants={{
//         visible: { opacity: 1, scale: 1 },
//         hidden: { opacity: 0, scale: 0 }
//       }}

const SectionServices = () => {


    return (


        <div className='section-services'>
            <div className="container">
                <h2 className=' text-3xl md:text-5xl '>What We Do</h2>
                <div className="underline"></div>
                <p className=' w-50'> {`At Laxill Company Limited, we're dedicated to helping businesses harness the power of data to make informed decisions, optimize processes, and achieve their goals. We specialize in data analytics, offering a wide range of services that turn raw data into actionable insights.`}
                </p>
            </div>

            <div className="container">
                < div className="card-wrapper"

                >
                    <div className="card-section"

                    >

                        <motion.div className="card"

                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, }}
                            transition={{ delay: 0.3, duration: .8, ease: "easeOut" }}

                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 0 },

                            }}

                        >
                            <div className="card-image" style={{
                                // use the src property of the image object
                                backgroundImage: `url(${bg1.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* <Image
                                    className="width"
                                    src={"/images/data-analytics1.jpg"}
                                    width={500}
                                    height={500}

                                /> */}
                            </div>
                            <div className="card-text">
                                <h5>Data Analysis</h5>
                                <p>{`We provide comprehensive data analysis services that allow you to explore, visualize, and interpret your data. Whether you're dealing with structured or unstructured data, we have the expertise to uncover valuable patterns and trends that drive your business forward.`}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, }}
                            transition={{ delay: 0.5, duration: .8, ease: "easeOut" }}

                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 0 },

                            }}
                        >
                            <div className="card-image" style={{
                                // use the src property of the image object
                                backgroundImage: `url(${bg2.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* <Image
                                    className="width"
                                    src={"/images/data-analytics1.jpg"}
                                    width={500}
                                    height={500}

                                /> */}
                            </div>
                            <div className="card-text">
                                <h5>Predictive Analytics</h5>
                                <p>
                                    {`Predictive analytics is at the heart of what we do. Our experts build models that help you anticipate future trends and make data-driven decisions. From demand forecasting to customer behavior prediction, we've got you covered.`}
                                </p>
                            </div>
                        </motion.div>
                        <motion.div className="card"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, }}
                            transition={{ delay: 0.7, duration: .8, ease: "easeOut" }}

                            variants={{
                                visible: { opacity: 1, y: 0 },
                                hidden: { opacity: 0, y: 0 },

                            }}
                        >
                            <div className="card-image" style={{
                                // use the src property of the image object
                                backgroundImage: `url(${bg3.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* <Image
                                        className="width"
                                        src={"/images/data-analytics1.jpg"}
                                        width={500}
                                        height={500}

                                    /> */}
                            </div>
                            <div className="card-text">
                                <h5>Data Visualization</h5>
                                <p>Transforming data into meaningful visuals is a powerful way to communicate insights. Our data visualization services make complex data understandable and actionable, enabling your team to act on valuable information quickly.
                                </p>
                            </div>
                        </motion.div>


                    </div>
                     <Link href={`/services`}><motion.button className='button-testimonials z-10'
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, }}
                    transition={{  delay:0.3 ,duration:.3,ease:"easeOut"}}
                    
                    variants={{
                        visible: { opacity: 1, y: 0 },
                        hidden: { opacity: 0, y: 10 },

                    }}
                    >See More</motion.button></Link>
                </div>


            </div >

        </div >
    )
}

export default SectionServices
