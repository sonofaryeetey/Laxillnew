"use client"
import React from 'react'
import aboutmini from "../../../public/images/aboutUsMini.jpeg"
import Link from 'next/link'
import SubheroSection from '../components/SubheroSection'
import { motion, AnimatePresence } from 'framer-motion'

const About = () => {

    const team = [
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
            avatar: "https://images.unsplash.com/photo-1623605931891-d5b95ee98459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=640&q=80",
            name: "Aaron Boateng",
            title: "Data Analyst(Team Lead)",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Obed Obeng",
            title: "Business Intelligence Consultant",
            desc: "Lorem Ipsum is simply dummy text of the printing and typesettin industry.",
            linkedin: "javascript:void(0)",
            twitter: "javascript:void(0)",
            github: "javascript:void(0)"
        },
        {
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
            name: "Gabriel Boateng",
            title: "Cybersecurity Data Analyst",
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
        {
            avatar: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80",
            name: "Joshua Aryeetey",
            title: "Data Engineer(Technical Program Manager)",
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
                            <div className='about-text'>
                                <h5 className='text-white'>ABOUT LAXILL</h5>

                                <h1 className='w-full text-center text-h1   md:w-full md:text-5xl'>
                                    Enabling businesses drive profits through
                                    analytical <span className='newText-gradient'>digital transformation</span>.
                                </h1>
                            </div>
                            <div className='about-image'>
                                <motion.img

                                    src="images/worldmap.png"

                                    initial={{ opacity: 0, scale: 1.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{once:true}}
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
                                    backgroundImage:"url(images/data-analytics-about.jpg)",
                                    backgroundSize:"cover",
                                    backgroundPosition:'center'
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
                                        <img src="images/OIG.jpg" className="md:max-w-28 sm:rounded-lg" alt="" />
                                    </div>
                                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-lg">
                                        {/* <h3 className="text-orange-600 font-semibold">
                                            WHO WE ARE
                                        </h3> */}
                                        {/* <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                            Drive your <span className='text-gradient'>growth </span>and <span className='text-gradient'>Success</span> with Laxill
                                        </p> */}
                                        <p className="text-gray-800 text-3xl font-semibold md:text-5xl">
                                            <span className='text-gradient2'>{`2023 & Beyond`}</span> 
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
                            <div className="max-w-4xl text-center mx-auto mb-24  ">
                                <h3 className="text-gray-800 text-3xl  font-extrabold sm:text-5xl">
                                    Our leaders are experts in 
 <span className='text-gradient2'> transforming insights </span>into impact.
                                </h3>

                                <p className='py-14 text-lg'>Going above and beyond for our team, our partners, and our business, these are the leaders who make Laxill 
Limited the growth-minded company that it is today. </p>

                        <p className='text-2xl font-bold'>Meet The Team</p>

                            </div>
                            <div className="mt-12">
                                <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
                                    {
                                        team.map((item, idx) => (
                                            <li key={idx}>
                                                <div className="w-full h-60 sm:h-52 md:h-56">
                                                    <img
                                                        src={item.avatar}
                                                        className="w-full h-full object-cover object-center shadow-md rounded-xl"
                                                        alt=""
                                                    />
                                                </div>
                                                <div className="mt-4">
                                                    <h4 className="text-lg text-gray-700 font-semibold">{item.name}</h4>
                                                    <p className="">{item.title}</p>
                                                    {/* <p className="text-gray-600 mt-2">{item.desc}</p> */}
                                                    <div className="mt-3 flex gap-4 text-gray-400 hidden">
                                                        <Link href={item.twitter}>
                                                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_80)"><path fill="currentColor" d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z" /></g><defs><clipPath id="clip0_17_80"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                        </Link>
                                                        <Link href={item.github}>
                                                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="currentColor" viewBox="0 0 48 48"><g fill="currentColor" clip-path="url(#clip0_910_44)"><path fill-rule="evenodd" d="M24 1A24.086 24.086 0 008.454 6.693 23.834 23.834 0 00.319 21.044a23.754 23.754 0 003.153 16.172 23.98 23.98 0 0012.938 10.29c1.192.221 1.641-.518 1.641-1.146 0-.628-.024-2.45-.032-4.442-6.676 1.443-8.087-2.817-8.087-2.817-1.089-2.766-2.663-3.493-2.663-3.493-2.178-1.478.163-1.45.163-1.45 2.413.17 3.68 2.461 3.68 2.461 2.138 3.648 5.616 2.593 6.983 1.976.215-1.545.838-2.596 1.526-3.193-5.333-.6-10.937-2.647-10.937-11.791a9.213 9.213 0 012.472-6.406c-.246-.6-1.069-3.026.234-6.322 0 0 2.015-.64 6.602 2.446a22.904 22.904 0 0112.017 0c4.583-3.086 6.594-2.446 6.594-2.446 1.307 3.288.484 5.714.238 6.322a9.194 9.194 0 012.476 6.414c0 9.163-5.615 11.183-10.957 11.772.859.742 1.626 2.193 1.626 4.421 0 3.193-.028 5.762-.028 6.548 0 .636.433 1.38 1.65 1.146a23.98 23.98 0 0012.938-10.291 23.754 23.754 0 003.151-16.175A23.834 23.834 0 0039.56 6.69 24.086 24.086 0 0024.009 1H24z" clip-rule="evenodd" /><path d="M9.089 35.264c-.052.119-.243.154-.398.071-.155-.083-.27-.237-.214-.36.056-.122.242-.154.397-.07.155.082.274.24.215.359zM10.063 36.343a.4.4 0 01-.493-.11c-.155-.167-.187-.396-.068-.499.12-.102.334-.055.489.11.155.167.19.396.072.499zM11.008 37.714c-.147.103-.397 0-.536-.206a.395.395 0 010-.569c.147-.098.397 0 .537.202.139.202.143.47 0 .573zM12.292 39.042c-.131.146-.397.106-.616-.091-.219-.198-.27-.467-.139-.609.131-.142.397-.102.624.091.226.194.27.466.131.609zM14.092 39.816c-.06.186-.33.269-.6.19-.27-.08-.449-.3-.397-.49.051-.19.326-.277.6-.19.274.087.449.297.397.49zM16.056 39.95c0 .194-.223.36-.509.364-.286.004-.52-.154-.52-.348 0-.193.222-.36.508-.363.286-.004.52.15.52.347zM17.884 39.646c.036.194-.163.395-.45.443-.285.047-.536-.067-.572-.257-.035-.19.171-.395.45-.447.278-.05.536.068.572.261z" /></g><defs><clipPath id="clip0_910_44"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                        </Link>
                                                        <Link href={item.linkedin}>
                                                            <svg className="w-5 h-5 duration-150 hover:text-gray-500" fill="none" viewBox="0 0 48 48"><g clip-path="url(#clip0_17_68)"><path fill="currentColor" d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z" /></g><defs><clipPath id="clip0_17_68"><path fill="currentColor" d="M0 0h48v48H0z" /></clipPath></defs></svg>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </li>
                                        ))
                                    }
                                </ul>
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