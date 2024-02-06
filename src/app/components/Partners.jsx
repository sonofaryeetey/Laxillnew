import React from 'react'
import Stats from './Stats'
import {motion} from 'framer-motion'
import Link from 'next/link'

const Partners = () => {
    return (
        <div className='partners-section' style={{
            background:'url(images/growth-graph.png)',
            backgroundSize:'60%',
            backgroundImageOpacity:'0.5',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundPositionY:'70px',

            }}>
            <div className="container_header">
                <h2 className='py-5 text-align'>Our Partners</h2>
                <div className="underline"></div>
                <div className='partners-wrapper'>
                    <div className="partners-text">
                        <motion.h1
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0} }
                        viewport={{once:true}}
                        transition={{duration:0.7, ease:"easeOut"}}
                        className=''
                        >Partner Program</motion.h1>
                        < motion.p className='py-5' 
                            initial={{opacity:0, x:-100}}
                            whileInView={{opacity:1, x:0} }
                            viewport={{once:true, }}
                            transition={{duration:0.7, ease:"easeOut"}}
                        
                        >Embraced by a roster of rapidly expanding
                            enterprises, collaboration through real-life stories
                            empowers technology, channel, and portfolio partners
                            to provide unparalleled solutions in the realm of
                            comprehensive analytics automation and management.</motion.p>
                            <motion.button className='partner-button'
                                initial={{opacity:0, }}
                                whileInView={{opacity:1, } }
                                viewport={{once:true, amount:0.7}}
                                transition={{duration:0.7, ease:"easeOut"}}
                            
                            > <Link href={`/Contact`}>Become A Partner</Link></motion.button>
                    </div>
                    <motion.div className="partner-image-wrapper"
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0,} }
                        viewport={{once:true, amount:0.7}}
                        transition={{ duration:0.7, ease:"easeOut"}}
                    >
                        <img src="images/man_yellow_bg.png" alt="" srcset="" />
                    </motion.div>
                </div>

            </div>
            <div className="container_header">
                
                <div className='partners-wrapper bg-color'>
                  
                    <div className="partner-image-wrapper">
                        <motion.img src="images/imac.png" alt="" srcset=""
                        initial={{opacity:0, x:-100}}
                        whileInView={{opacity:1, x:0,} }
                        viewport={{once:true, amount:0.7}}
                        transition={{ dealy:0.3,duration:0.7, ease:"easeOut"}}
                         />
                    </div>
                    <div className="partners-text">
                        <motion.h1
                        initial={{opacity:0, y:-100}}
                        whileInView={{opacity:1, y:0,} }
                        viewport={{once:true, amount:1}}
                        transition={{ duration:0.7, ease:"easeOut"}}>Achieve your business goals at an accelerated pace. Take the first step</motion.h1>
                        <motion.p className='py-5'
                        initial={{opacity:0, y:100}}
                        whileInView={{opacity:1, y:0} }
                        viewport={{once:true, amount:0.7}}
                        transition={{ dealy:0.3,duration:0.7, ease:"easeOut"}}
                        >Explore how partnering with Laxill and other industry-leading partners can enable digital tranformation for your business</motion.p>
                            {/* <button className='partner-button'>Become A Partner</button> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Partners