import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const Brief = () => {
  return (
    <div className='brief-section'>
      <div className="container">
        <div className="brief-info">
          < motion.h2
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0, }}
            viewport={{ once: true,  }}
            transition={{ duration: 0.7, ease: "easeOut" }}

          > Utilize meaningful
            findings to guide and
            <span className=''> elevate</span> your business operations</motion.h2>
          <motion.div className='bold'
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0, }}
            viewport={{ once: true}}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}>
            <h5 className='text-xl text-white font-bold'


            > Streamline the business process</h5>
            <ul>
              <li>

                <p className="text-gray-500 leading-relaxed mt-3">
                  Work with our highly skilled data analysts to help
                  translate insights into impact.
                </p></li>
              <li>

                <p className="text-gray-500 leading-relaxed mt-3">
                  Make use of Big Data and machine learning (ML)
                  technologies to discover patterns in your
                  unstructured data.
                </p></li>
              <li>

                <p className="text-gray-500 leading-relaxed mt-3">
                  Foster a data-driven culture across your team with
                  our self-service dashboards.
                </p></li>

            </ul>
            <button className='contact-btn mt-5  '><Link href={`/Contact`}>Get in touch</Link></button>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Brief