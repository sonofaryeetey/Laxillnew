"use client"

import React from 'react'
import { useState } from 'react'
import logo from "../../../public/images/logov2.png"
import { usePathname } from 'next/navigation'
import {motion} from 'framer-motion'
import Link from 'next/link'




const Nav = () => {
    const path = usePathname();
    console.log(path)

    const [state, setState] = useState(false)

    // Replace javascript:void(0) path with your path
    const navigation = [
        
        { title: "Home", path: "/" },
        { title: "About", path: "/About" },
        { title: "Services", path: "/services" },
        { title: "Testimonials", path: "/Testimonials" },
        { title: "Contact", path: "/Contact" },
    ]

    return (
        <nav className="nav w-full  md:border-0 md:static">
            <div className="  items-center .nav-padding  max-w-screen-xl mx-auto md:flex md:px-8">
                <div className=" logo flex items-center justify-between py-3 md:py-3 md:block">
                    <a href="/">
                        <img
                            src={logo.src}
                            width={80}
                            height={50}
                            alt="logo"
                        />  
                        
                    </a>
                    <img
                            src='images/laxillLogoText.png'
                            width={80}
                            height={50}
                            alt="logo"
                            className='hidden'
                        />
                    <div className="md:hidden">
                        <button className="text-black outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                            onClick={() => setState(!state)}
                        >
                            {
                                state ? (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                ) : (
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                    </svg>
                                )
                            }
                        </button>
                    </div>
                </div>
                <div className={`flex-1 mobile-link-wrapper justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${state ? 'block' :'hidden'}`}>
                    <ul className={`justify-end mr-5 items-center space-y-8 md:flex md:space-x-6 md:space-y-0 ${state ? '' :' ul-hid'}`}>
                        {
                            navigation.map((item, idx) => {
                                return (
                                    <motion.div key={idx}
                                    whileHover={{scale:1.1}}
                                    >
                                        <li className='text-center text-xl md:text-base' >
                                        <a href={item.path} className={`${path===item.path? " highlight":""}  hover:text-indigo-600 px-2`}    >
                                            {item.title}
                                        </a>
                                    </li>
                                    </motion.div>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="hidden md:inline-block">
                    {/* <a href="javascript:void(0)" className="py-3 px-4 text-white bg-indigo-600 hover:bg-indigo-700 rounded-md shadow">
                        Get Started
                    </a> */}
                    <button className='small-button buttonplane'><Link href={`/Contact`}>Get started</Link></button>
                </div>

                
            </div>
        </nav>
    )
}

export default Nav