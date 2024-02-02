
"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const testimonials = [
    {
        avatar: "images/herowoman.jpg",
        name: "Elizabeth Brago",
        title: "Founder of Liznell Company Limited ",
        quote: "With Laxill’s guidance, we have gained the insight to enhance customer satisfaction. By adopting digital technologies, we have been able to harness our data and make informed decisions."
    },
    {
        avatar: "https://randomuser.me/api/portraits/women/79.jpg",
        name: "Andrew Kwabena",
        title: "Small Business Owner",
        quote: "Since implementing the strategies recommended by team laxill, we've witnessed a significant improvement in the efficiency of our operations. The analytics-driven approach has allowed us to make data-backed decisions, leading to more informed strategies and, ultimately, an increase in our profit margins."
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Douglas Appiah",
        title: "Shipping Agent",
        quote: "We couldn't be happier with the innovative data analytics service from the team at Laxill. It has been a game-changer for our small business. The insights provided have empowered us to make smarter decisions, optimize routes, and enhance overall efficiency. Grateful for the partnership! "
    },
    {
        avatar: "https://randomuser.me/api/portraits/men/86.jpg",
        name: "Kristina Jenay",
        title: "Cybersecurity Analyst",
        quote: "Our partnership with Laxill Limited has been nothing short of transformative. Their expert guidance on leveraging data analytics to enhance our business's digital transformation and fortify security monitoring has been invaluable."
    },
]



const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0)
    const [checker, setChecker] = useState(true)


    function role() {

        if (checker && (currentTestimonial < testimonials.length - 1)) {
            setCurrentTestimonial(currentTestimonial + 1)
        } else {
            setCurrentTestimonial(0)
        }

    }


    console.log(currentTestimonial)
    setTimeout(role, 4000)

    return (
        <section className="py-14 testimonials">
            <motion.div
                className="max-w-screen-xl mx-auto py-10 px-4 nav-padding md:px-8 card-testimonials"
                initial={{ opacity: -1, }}
                whileInView={{ opacity: 1, }}
                viewport={{ once: true, amount: 0.7 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="max-w-3xl mx-auto text-center">
                    <h3 className="text-indigo-600 font-semibold pb-6">What people are saying</h3>
                    <ul>
                        {
                            testimonials.map((item, idx) => (
                                currentTestimonial == idx ? (
                                    <li key={idx}>
                                        <figure>
                                            <blockquote>
                                                <p className="text-gray-800 text-xl font-semibold sm:text-2xl">
                                                    “{item.quote}“
                                                </p>
                                            </blockquote>
                                            <div className="mt-6">
                                                {/* <img src={item.avatar} className="w-16 h-16 mx-auto rounded-full" /> */}
                                                <div className="mt-3">
                                                    <span className="block text-gray-800 font-semibold">{item.name}</span>
                                                    <span className="block text-gray-600 text-sm mt-0.5">{item.title}</span>
                                                </div>
                                            </div>
                                        </figure>
                                    </li>
                                ) : ""
                            ))
                        }
                    </ul>
                </div>
                <div className="mt-6">
                    <ul className="flex gap-x-3 justify-center">
                        {
                            testimonials.map((item, idx) => (
                                <li key={idx}>
                                    <button className={`w-2.5 h-2.5 rounded-full duration-150 ring-offset-2 ring-indigo-600 focus:ring ${currentTestimonial == idx ? "bg-indigo-600" : "bg-gray-300"}`}
                                        onClick={() => setCurrentTestimonial(idx)}
                                    ></button>
                                </li>
                            ))
                        }
                    </ul>
                    <div className="zod">
                        <button className='button-testimonials'>
                            <Link href={`/Testimonials`}> See All Testimonials</Link>

                        </button>
                    </div>
                </div>

            </motion.div>
            
        </section>
    )
}

export default Testimonials