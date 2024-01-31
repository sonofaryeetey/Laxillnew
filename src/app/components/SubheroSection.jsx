
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { motion } from "framer-motion"

const SubheroSection = ({ info }) => {

  const style = {
    backgroundImage: info.url,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }



  return (
    <div className="subherosection relative" style={style}>

      <div className='subhero-container relative container'>
        <div className='subhero-text relative'>

          {/* <h2 className='text-2xl'><span className='text-gradient'>{info.Heading}.</span></h2>
         <h3 className='text-3xl md:text-6xl'><span className=''> {info.Tag}</span></h3>
         <div className='underline '></div> */}
          {/* <p className='my-6 w-85'> Providing insights from raw data to drive strategic decision-making and optimize business operations.</p> */}
          {/* <button className='button'>Get started</button> */}

          <div>
            < motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
              className=' md:text-4xl pb-6'>Partner with Laxill and gain a competitive edge
            </motion.h1>
            <motion.p

              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.7, ease: 'easeOut' }}

              className='  md:text-xl pr-14'>Unlock your business potential with tailored data solutions.</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.9, ease: 'easeOut' }}

              className='md:text-xl pb-6 pr-14'>{`Let's transform your data into your most valuable asset together.`}</motion.p>

            <motion.button 
              initial={{ opacity: 0, }}
              whileInView={{ opacity: 1, }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2, ease: 'easeOut' }}

            className='button-about'><Link href="/Contact">Get started</Link></motion.button>
          </div>
        </div>

      </div>

      <div className='overlay' style={{ opacity: 0 }}></div>

    </div>
  )
}

export default SubheroSection