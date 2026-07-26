"use client"
import React from 'react'
import aboutmini from "../../../public/images/aboutUsMini.jpeg"
import Link from 'next/link'
import SubheroSection from '../components/SubheroSection'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {

    const team = [

        {
            avatar: "images/Aaron.jpeg",
            name: "Aaron Boateng",
            title: "Data Analyst(Team Lead)",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "images/obed.png",
            name: "Obed Obeng",
            title: "Business Intelligence Consultant",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "images/Jagga.jpeg",
            name: "Gabriel Boateng",
            title: "Cybersecurity Analyst (GRC, IAM)",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },

        {
            avatar: "images/Joshua.jpg",
            name: "Joshua Aryeetey",
            title: "Data Engineer(Technical Program Manager)",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
    ]

    const international_team = [
        {
            avatar: "https://images.unsplash.com/photo-1614890094520-7b8dd0ec56d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFmcmljYW4lMjBtYW58ZW58MHx8MHx8fDA%3D",
            name: "Moses Boateng",
            title: "Senior Data Analyst",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Emmanuel Boateng",
            title: "Risk Analyst(Business Advisor)",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
    ]

    const info = {
        url: "url(./images/data-analytics4.jpg)",
        Heading: 'ABOUT US',
        Tag: 'WHO. WE. ARE',
        para: "",
        opacity: "0.7"
    }
    return (
        <div>
            <AnimatePresence>
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 15 }}
                    transition={0.25}
                >
                    {/* <SubheroSection info={info} /> */}
                    {/* <section className="relative overflow-hidden py-28 px-4 bg-gray-900 md:px-8">
                <div className="w-full h-full rounded-full bg-gradient-to-r from-[#58AEF1] to-pink-500 absolute -top-12 -right-14 blur-2xl opacity-10"></div>
                <div className="max-w-xl mx-auto text-center relative">
                    <div className="py-3">
                        <h3 className="text-3xl text-gray-200 font-bold md:text-5xl text-gradient">
                            ABOUT LAXILL LIMITED
                        </h3>
                        <p className="text-gray-300 leading-relaxed mt-3">
                            Nam erat risus, sodales sit amet lobortis ut, finibus eget metus. Cras aliquam ante ut tortor posuere feugiat. Duis sodales nisi id porta lacinia.
                        </p>
                    </div>

                </div>

            </section> */}
                    <section className='about-section'>
                        <div className='container_header'>
                            <div className='spacer'></div>
                            <div className='about-text'>
                                <h5 className='text-white'>ABOUT LAXILL</h5>

                                <h1 className='w-full text-center text-h1   md:w-full md:text-4xl'>
                                    Enabling businesses drive profits <span className='newText-gradient'> globally</span> through
                                    analytical <span className='newText-gradient'>digital transformation</span>.
                                </h1>
                            </div>
                            <div className='about-image'>
                                <motion.img

                                    src="images/worldmap-eps.png"

                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5, duration: 2, ease: "easeInOut" }}
                                />

                            </div>

                            <div className='about-text'>

                                <h1 className='w-full text-center text-h1   md:w-3/5 md:text-4xl'>
                                    Communicate your findings,
                                    make <span className='newText-gradient'>immediate</span> impact.
                                </h1>
                                <p className='text-white md:text-xl'>Modern data visualization tools can be used to tell especially powerful stories with
                                    numbers. Our goal is to be the hero of your data-driven success story.</p>

                            </div>
                            <div className='media-wrapper'>
                                <div className='media' style={{
                                    backgroundImage: "url(images/data-analytics-about.jpg)",
                                    backgroundSize: "cover",
                                    backgroundPosition: 'center'
                                }}>
                                    <div className='overlay'></div>
                                    <div className='media-text'>
                                        <p className='text-white'>OUR MISSION</p>

                                        <h3 className='text-xl text-white md:text-3xl'>
                                            Our mission is to deliver unparalleled
                                            data analytics solutions that drive
                                            business innovation, efficiency, and
                                            success.
                                        </h3>

                                    </div>
                                </div>

                            </div>

                            <div className='container'>
                                <div className='media-stats'>
                                    <div className='stats-children'>
                                        <div>
                                            <h4>{`62 +`}</h4>
                                            <p>customers and counting</p>
                                        </div>

                                        <div>
                                            <h4>{`28 +`}</h4>
                                            <p>team of data analysis experts </p>
                                        </div>
                                    </div>

                                    <div className='stats-children'>
                                        <div>
                                            <h4>{`82 +`}</h4>
                                            <p>global partners </p>
                                        </div>

                                        <div>
                                            <h4>{`96%`}</h4>
                                            <p>customer satisfaction rating</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </section>


                    <div className='container'>
                        <p className='font-bold  max-w-full leading-tight px-10 text-3xl  md:w-2/3 md:text-5xl py-12  mt-10'>We started with a vision that
                            is <span className='text-gradient2'>continually expanding.</span>
                        </p>
                        <section className="py-14 weare">

                            <div className="max-w-screen-xl mx-auto md:px-8">
                                <div className='zod'>
                                    <div className="items-center gapper centerize gap-x-10  sm:px-4 md:px-0 lg:flex">
                                        <div className="flex-1  lg:block">
                                            <div className='img-restrict'>
                                                <img src="images/hot-air-baloons.jpg" className="md:max-w-28 sm:rounded-lg" alt="" />
                                            </div>
                                        </div>
                                        <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-lg">
                                            {/* <h3 className="text-orange-600 font-semibold">
                                            WHO WE ARE
                                        </h3> */}
                                            {/* <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                            Drive your <span className='text-gradient'>growth </span>and <span className='text-gradient'>Success</span> with Laxill
                                        </p> */}
                                            <p className="text-gray-800 text-3xl font-semibold md:text-5xl">
                                                <span className=''>{`2023 & Beyond`}</span>
                                            </p>
                                            <p className="mt-3 text-gray-600">
                                                Since our establishment in 2014, the team has devoted
                                                substantial effort to establishing our brand as a globally
                                                competitive startup. Looking ahead to 2023 and beyond,
                                                Laxill is committed to introducing new products and
                                                services that underscore our dedication to leading
                                                analytical digital transformation in businesses, not only
                                                in Africa but globally
                                            </p>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </section>

                    </div>

                    {/* <div className='divider'></div>
                    <section className="py-14 ">
                        <div className='zod '>
                            <div className="max-w-screen-xl mx-auto md:px-8">
                                <div className="items-center centerize gap-x-12 sm:px-4 md:px-0 lg:flex">

                                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                        <h3 className="text-orange-600 font-semibold">
                                            OUR MISSION

                                        </h3>
                                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                            Powering Innovation and Success Through Data
                                        </p>
                                        <p className="mt-3 text-gray-600">
                                            Our mission is to deliver unparalleled Data Analytics solutions that drive innovation, efficiency, and success for our clients. We believe that data is more than just numbers - it’s a powerful tool that, when harnessed correctly, can unlock limitless potential. Whether it’s identifying new market opportunities, improving operational efficiency, or predicting future trends, our solutions are designed to give our clients the insights they need to stay ahead of the competition.
                                        </p>

                                    </div>

                                    <div className="flex-1  lg:block">
                                        <img src="images/innovation.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </section> */}

                    <section className="py-14 about-mission ">
                        <div className='zod'>
                            <div className="max-w-screen-xl mx-auto md:px-8">
                                <div className="items-center centerize gap-x-12 sm:px-4 md:px-0 lg:flex">
                                    <div className="flex-1  lg:block">
                                        <img src="images/pillars2.jpg" className="md:max-w-lg sm:rounded-lg" alt="" />
                                    </div>

                                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                                        <div>
                                            <h3 className="text-orange-600 font-semibold">
                                                OUR VALUES

                                            </h3>
                                            <p className="text-white text-3xl font-semibold sm:text-4xl">
                                                Pillars of Success
                                            </p>
                                            <p className="mt-3 text-white">
                                                {`At Laxill Limited, our values are more than just words - they’re the principles that guide everything we do.`}
                                            </p>

                                        </div>
                                        <div className='pl-4'>
                                            <h3 className="text-orange-600 text-base font-semibold">
                                                Excellence:

                                            </h3>

                                            <p className="mt-2 text-sm text-white">
                                                We strive for excellence in everything we do. From our state-of-the-art analytics solutions to our world-class customer service, we’re committed to delivering the best in everything we do.
                                            </p>

                                        </div>
                                        <div className='pl-4'>
                                            <h3 className="text-orange-600 text-base font-semibold">
                                                Integrity:

                                            </h3>

                                            <p className="mt-2 text-sm text-white">
                                                {`We uphold the highest standards of integrity in our work. For us, this means ensuring transparency and honesty in every interaction, whether it’s with our clients, our partners, or our team members.`}
                                            </p>

                                        </div>
                                        <div className='pl-4'>
                                            <h3 className="text-orange-600 text-base font-semibold">
                                                Innovation:

                                            </h3>

                                            <p className="mt-2 text-sm text-white">
                                                {`Embracing innovation is at the core of our philosophy. We’re constantly exploring new technologies and methodologies, pushing the boundaries of what’s possible to offer our clients cutting-edge solutions that keep them at the forefront of their industries.`}
                                            </p>

                                        </div>
                                        <div className='pl-4'>
                                            <h3 className="text-orange-600 text-base font-semibold">
                                                Client-Centric Approach:

                                            </h3>

                                            <p className="mt-2 text-sm text-white">
                                                {`Your success is our success. We take the time to understand your unique needs and challenges, crafting bespoke solutions that not only meet but exceed your expectations.`}
                                            </p>

                                        </div>




                                    </div>


                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="py-20 section-mtt">
                        <div className="max-w-screen-xl mx-auto px-4 md:px-8 ">
                            <div className="max-w-4xl text-center mx-auto mb- ">
                                <h3 className="text-gray-800 text-3xl  font-extrabold sm:text-5xl">
                                    Our leaders are experts in
                                    <span className='text-gradient2'> translating insights </span>into impact.
                                </h3>

                                <p className='pt-14 pb-8 text-lg'>Going above and beyond for our team, our partners, and our business, these are the leaders who make Laxill
                                    Limited the growth-minded company that it is today. </p>



                            </div>

                           {/*  <p className='text-3xl font-bold'>Meet The Team</p>*/}
                            <div className="mt-7">
                                {/* Team profiles will be added here soon. */}
                            </div>

                            <h3 className='text-3xl font-bold mt-16 hidden'>International Business Advisors</h3>
                            <div className="mt-5">
                                {/* International advisor profiles will be added here soon. */}
                            </div>
                        </div>

                        <div className='closing-text px-5  md:w-1/2  '>
                            <p>
                                {`We invite you to join us on this exciting journey as we turn data into actionable insights, shaping a future where every decision is a smart decision. With Laxill Limited, you’re not just getting a service provider - you’re getting a partner committed to your success.`}
                            </p>
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default About 