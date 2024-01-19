import React from 'react'
import { motion } from 'framer-motion'

const Cta = () => {

    return (
        <section className=" cta relative max-w-screen-xl mx-auto py-8 px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full bg-white opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <motion.h3
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ duration: 0.7, ease: "easeOut" }} className="text-3xl  font-bold md:text-5xl">
                        {/* Take your business to the  <span className="text-gradient">Next Level</span> */}
                        Real-Time Reporting
                    </motion.h3>
                    < motion.ul
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0, }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ dealy: 0.3, duration: 0.7, ease: "easeOut" }}>
                        <li>
                            <h2 className='text-xl font-bold'>Instantaneous Insights:</h2>
                            <p className="text-gray-500 leading-relaxed mt-3">
                                Access up-to-the-moment information,
                                allowing for quick decision-making and agile responses to
                                changing scenarios
                            </p></li>
                        <li>
                            <h2 className='text-xl font-bold'>Customized Alerts and Notifications:</h2>
                            <p className="text-gray-500 leading-relaxed mt-3">
                                Send alerts when
                                predefined thresholds are reached, ensuring that stakeholders
                                are proactively informed of critical developments.
                            </p></li>
                        <li>
                            <h2 className='text-xl font-bold'>Predictive Analytics Integration:</h2>
                            <p className="text-gray-500 leading-relaxed mt-3">
                                Harness the power of
                                predictive analytics seamlessly integrated with real-time
                                reporting.
                            </p></li>
                        <li>
                            <h2 className='text-xl font-bold'>Scalable Architecture::</h2>
                            <p className="text-gray-500 leading-relaxed mt-3">
                                Handle growing datasets without
                                compromising performance.
                            </p></li>
                    </motion.ul>
                    {/* <a
                            className="mt-5 px-4 py-2 text-indigo-600 font-medium bg-indigo-50 rounded-full inline-flex items-center"
                            href="javascript:void()">
                            Try it out
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </a> */}
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <motion.img

                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1, }}
                        viewport={{ once: true, amount: 0.7 }}
                        transition={{ delay: 0.5, duration: 0.7, ease: "easeOut" }}
                        src="https://i.postimg.cc/kgd4WhyS/container.png"
                        alt=""
                        className="w-full"
                    />
                </div>
            </div>
        </section>
    )
}

export default Cta