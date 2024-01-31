"use client"
import React from 'react'
import SubheroSection from '../components/SubheroSection'

import { motion, AnimatePresence } from 'framer-motion'

const Testimonials = () => {

    const testimonials = [
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Kwabena Asomani",
            title: "Teaching Agency Coordinator",
            quote: "Your proactive approach to analyzing our data has enabled us to stay ahead of emerging trends in the education sector and adapt our strategies accordingly"
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Chris Mesut",
            title: "Software Developer",
            quote: "Laxill’s expertise in dissecting and interpreting complex datasets has truly transformed the way I understand and utilize data in my projects."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Dennis Gyamfi ",
            title: "Supply Chain Analyst",
            quote: 'Before partnering with them, our data was scattered across various systems and formats, making it challenging to derive meaningful insights. However, the team atLaxill was able to consolidate and analyze our data, uncovering hidden patterns and trends that we were previously unaware of.'
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Samuel Larson",
            title: "Health Research Advocate",
            quote: "By leveraging their insights, we've been able to advocate for evidence-based policies and initiatives that have the potential to positively impact countless lives."
        },
        {
            avatar: "https://randomuser.me/api/portraits/women/79.jpg",
            name: "Raphael Dumas",
            title: "High Net worth Insurance Agent",
            quote: "Their proactive approach to data analysis has enabled me to identify potential risks and opportunities within my client portfolio. By analyzing data on policy performance, claims history, and market trends, I've been able to anticipate client needs and proactively offer tailored solutions to mitigate risks and maximize value."
        },
        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Elizabeth Brago ",
            title: "Founder of Liznell Company Limited",
            quote: "With Laxill’s guidance, we have gained the insight to enhance customer satisfaction. By adopting digital technologies, we have been able to harness our data and make informed decisions."
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Andrew Kwabena",
            title: "Small Business Owner ",
            quote: "Since implementing the strategies recommended by team laxill, we've witnessed a significant improvement in the efficiency of our operations. The analytics-driven approach has allowed us to make data-backed decisions, leading to more informed strategies and, ultimately, an increase in our profit margins."
        },

        {
            avatar: "https://randomuser.me/api/portraits/men/86.jpg",
            name: "Douglas Appiah",
            title: "Shipping Agent",
            quote: "We couldn't be happier with the innovative data analytics service from the team at Laxill. It has been a game-changer for our small business. The insights provided have empowered us to make smarter decisions, optimize routes, and enhance overall efficiency. Grateful for the partnership!"
        },
        {
            avatar: "https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg",
            name: "Kristina Jenay  ",
            title: "Cybersecurity Analyst",
            quote: "Our partnership with Laxill Limited has been nothing short of transformative. Their expert guidance on leveraging data analytics to enhance our business's digital transformation and fortify security monitoring has been invaluable."
        },

    ]

    const info = {
        url: "url(./images/testimonial-hot-air.png)",
        Heading: "",
        Tag: "HAPPY.CLIENTS",
        Para: "",
        opacity: "0.4",
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
                    <SubheroSection info={info} />

                    <section className="py-14 mb-40">
                        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                            <div className="max-w-xl sm:text-center md:mx-auto">
                                <h3 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                    Customer Stories
                                </h3>
                                <p className="mt-3 text-gray-600 md:text-xl">
                                    {`Here's what our customers have to say.`}
                                </p>
                            </div>
                            <div className="mt-12">
                                <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                    {
                                        testimonials.map((item, idx) => (
                                            <motion.li
                                                initial={{ opacity: 0, y: 40 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true, amount: 1 }}
                                                transition={{duration:0.7, delay:0.3, ease:'easeOut'}}
                                                key={idx}
                                                className="bg-gray-100 p-4 rounded-xl">
                                                <figure>
                                                    <div className="flex items-center gap-x-4">
                                                        {/* <img src={item.avatar} className="w-16 h-16 rounded-full" /> */}
                                                        <div>
                                                            <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                            <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                        </div>
                                                    </div>
                                                    <blockquote>
                                                        <p className="mt-6 text-gray-700">
                                                            {item.quote}
                                                        </p>
                                                    </blockquote>
                                                </figure>
                                            </motion.li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>

                        <div className="container">
                            <div className="testimonial-poster my-20 py-10  px-10 w-3/4 py-10 mx-auto ">
                                <h2 className=' text-xl font-bold py-10 md:text-3xl md:font-medium '>
                                    "
                                    At Liznell, managing huge branding and printing projects is time consuming, I'm spending
                                    60% less time on optimizing marketing strategies because of Laxill’s input. I'm able to
                                    spend more time offering personalized branding solutions for my clients, and Laxill makes
                                    it a wonderful, seamless experience.

                                    "
                                </h2>

                                <h3 className='bg-yellow font-bold'> Elizabeth Brago</h3>
                                <p className='mx-auto'>Chief Executive Officer</p>

                            </div>
                        </div>
                    </section>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Testimonials