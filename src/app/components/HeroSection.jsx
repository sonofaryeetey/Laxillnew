import React from 'react'
import heroman from '../../../public/images/heroman.jpg'
import herowoman from '../../../public/images/herowman.jpg'
import {motion, AnimatePresence} from 'framer-motion'

const HeroSection = () => {
    return (
        <div className='hero-wrapper' style={{
            backgroundImage: 'url(./images/data-analytics1.jpg)',
            backgroundSize:'cover',
        }}>
            <div className="overlay"></div>
            <div className="container px-10">
                <div className="content">
                    <motion.div
                    initial={{opacity:0, x:-20}}
                    animate={{opacity:1, x:0}}
                    >
                        <p>CONNECT WITH US</p>
                        <h2 className='text-3xl md:text-5xl'>Data is power. <br></br><span className='text-gradient'>We help you harness it.</span></h2>
                        <p className='my-6 w-85'> Providing insights from raw data to drive strategic decision-making and optimize business operations.</p>
                        <button className='button'>Get started</button>
                    </motion.div>

                    <div className=' img-holder sm:hidden md:block'>
                        <div className="img-card
                            " style={{
                                // use the src property of the image object
                                backgroundImage: `url(${heroman.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",
                                
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>

                        </div>
                        <div className="img-card2
                            " style={{
                                // use the src property of the image object
                                backgroundImage: `url(${herowoman.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",                                
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                              }}>

                        </div>
                        
                    </div>
                    
                </div>
            </div>
            </div>
    )
}

export default HeroSection