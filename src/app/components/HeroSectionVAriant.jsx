import Link from 'next/link'
import React from 'react'
import { motion, AnimatePresence, } from 'framer-motion'

const HeroSectionVAriant = () => {
    return (
        <section className="herovariant">
            <div class="custom-shape-divider-bottom-1705044834 waveTilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>

            <div class="custom-shape-divider-bottom-1704969244 waveSvg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="container_header">
                <div className="content-new">
                    <div className='spacer'></div>
                    <motion.div className="content-new-text"
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.55, ease: "easeOut" }}
                    >
                        <h1>Make smart decisions and drive profitability through insights. </h1>
                        <p>Unlock the potential of your business through data-driven insights that fuel growth
                            and innovation. Empower your company to leverage data for informed decision-
                            making, streamlined operations, and accelerated expansion.</p>
                        <div>
                            <motion.button
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ }} 
                                className='buttonplane w-full'><Link href='/Contact'>Get started</Link>
                            </motion.button>

                            <motion.button
                                initial={{ opacity: 1, y: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ }} 
                                className='buttonoutline w-full'><Link href=''>Explore</Link>
                            </motion.button>
                        </div>

                    </motion.div>
                    <motion.div className="content-new-img"
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4, duration: 0.85, ease: 'easeOut' }}
                    >
                        <img src="images/Laxillrevised.png" alt="heroNew" />
                    </motion.div>

                </div>
            </div>

        </section>
    )
}

export default HeroSectionVAriant