"use client"
import React from 'react'
import SubheroSection from '../components/SubheroSection'
import Link from 'next/link'

const Contact = () => {
    const info = {
        url: "url(./images/contactImage2.jpg)",
        Heading: "CONTACT US",
        Tag: "GET.IN.TOUCH",
        Para: "",
        opacity: "",
    }

    const contactMethods = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
            ,
            contact: "Support@Laxill.com"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ,
            contact: "+1 (555) 000-000"
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ,
            contact: "NAGLA CLOSE,DARKUMAN OFFICIAL TOWN "
        },
    ]


    return (
        <>
            <div className='contact-wrapper py-5'>
                {/* <SubheroSection info={info}/> */}

                <div className='container_header'>
                <div className='contact flex'>
                    <div className='contact-text'>
                        <h1>Contact Us</h1>
                        <p>For more information get in touch by filling the form or contact us on <Link href="+233
                        
                        +233208704417">+233208704417</Link></p>
                    </div>
                    <div className=" form-wrapper">

                        <div className=" bg-white sm:px-8 sm:rounded-xl contact-form">
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-5"
                            >
                                <div>
                                    <label className="font-medium">
                                        Full name
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        required
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Phone number
                                    </label>
                                    <div className="relative mt-2">
                                        <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                            <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                                <option>US</option>
                                                <option>ES</option>
                                                <option>MR</option>
                                            </select>
                                        </div>
                                        <input
                                            type="number"
                                            placeholder="+1 (555) 000-000"
                                            required
                                            className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Message
                                    </label>
                                    <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                                </div>
                                <button
                                    className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                                >
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
                </div>
                <div className='absolute inset-0 blur-[118px] hidden max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>

                {/* <div className="my-20 max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8 bg-yellow-500">
                <div className="max-w-lg mx-auto gap-12 justify-between lg:flex lg:max-w-none">
                    <div className="max-w-lg space-y-3 bg-red-500">
                        <h3 className="text-orange-600 font-semibold">
                            Contact
                        </h3>
                        <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                            Let us know how we can help
                        </p>
                        <p>
                           {`We’re here to help and answer any question you might have, We look forward to hearing from you! Please fill out the form, or us the contact information bellow .`}
                        </p>
                        <div>
                            <ul className="mt-6 flex flex-wrap gap-x-10 gap-y-6 items-center">
                                {
                                    contactMethods.map((item, idx) => (
                                        <li key={idx} className="flex items-center gap-x-3">
                                            <div className="flex-none text-gray-400">
                                                {item.icon}
                                            </div>
                                            <p>{item.contact}</p>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="bg-pink-500 py-10 contact-form px-10 flex-1 mt-12 ">
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="space-y-5"
                        >
                            <div>
                                <label className="font-medium">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Company
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                />
                            </div>
                            <div>
                                <label className="font-medium">
                                    Message
                                </label>
                                <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"></textarea>
                            </div>
                            <button
                                className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div> */}

                {/* <main className="relative py-28" style={{ 
                                                    backgroundImage: 'url(./images/contactImage2.jpg)',
                                                    backgroundSize:'cover',
                                                    backgroundPosition:'center',
                                                    
                                                }}>
<div className='overlay'></div>
            <div className="relative z-10 max-w-screen-xl mx-auto text-gray-600 sm:px-4 md:px-8">
                <div className="max-w-lg space-y-3 px-4 sm:mx-auto sm:text-center sm:px-0">
                    <h3 className="text-cyan-400 font-semibold">
                        Contact
                    </h3>
                    <p className="text-white text-3xl font-bold sm:text-4xl">
                        Get in touch
                    </p>
                    <p className="text-gray-300">
                        {`We’d love to hear from you! Please fill out the form bellow.`}
                    </p>
                </div>
                <div className="mt-12 mx-auto px-4 p-8 bg-white sm:max-w-lg sm:px-8 sm:rounded-xl">
                    <form
                        onSubmit={(e) => e.preventDefault()}
                        className="space-y-5"
                    >
                        <div>
                            <label className="font-medium">
                                Full name
                            </label>
                            <input
                                type="text"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Email
                            </label>
                            <input
                                type="email"
                                required
                                className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="font-medium">
                                Phone number
                            </label>
                            <div className="relative mt-2">
                                <div className="absolute inset-y-0 left-3 my-auto h-6 flex items-center border-r pr-2">
                                      <select className="text-sm bg-transparent outline-none rounded-lg h-full">
                                          <option>GH</option>
                                          <option>US</option>
                                          <option>n</option>
                                      </select>
                                </div>
                                <input
                                    type="number"
                                    placeholder="+233 xxxx xxx xxx "
                                    required
                                    className="w-full pl-[4.5rem] pr-3 py-2 appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"
                                />
                            </div>
                        </div>
                        <div>
                            <label className="font-medium">
                                Message
                            </label>
                            <textarea required className="w-full mt-2 h-36 px-3 py-2 resize-none appearance-none bg-transparent outline-none border focus:border-gray-800 shadow-sm rounded-lg"></textarea>
                        </div>
                        <button
                            className="w-full px-4 py-2 text-white font-medium bg-gray-800 hover:bg-gray-700 active:bg-gray-900 rounded-lg duration-150"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
            <div className='absolute inset-0 blur-[118px] max-w-lg h-[800px] mx-auto sm:max-w-3xl sm:h-[400px]' style={{ background: "linear-gradient(106.89deg, rgba(192, 132, 252, 0.11) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0.26) 56.49%, rgba(79, 70, 229, 0.4) 115.91%)" }}></div>
        </main> */}
            </div>
            <div className='container_header'>

                <h1 className='text-center text-xl md:text-3xl'>Office locations</h1>

                <div className='map-wrapper'>
                

                    <div className='google-map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.828423512986!2d-0.
                2586169251760336!3d5.5923555943883985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99b1ea6b313d%
                3A0xca8f465a57b43f0a!2sNagla%20Cl%2C%20Accra!5e0!3m2!1sen!2sgh!4v1705494905531!5m2!1sen!2sgh"
                            style={{ border: '0' }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='map-text'>
                            <h3>Official Town</h3>
                            <p>Nagla close</p>
                            <Link target='_blank' href='https://www.google.com/maps/place/Nagla+Cl,+Accra/@5.592356,-0.256042,16z/data=!4m6!3m5!1s0xfdf99b1ea6b313d:0xca8f465a57b43f0a!8m2!3d5.5923556!4d-0.256042!16s%2Fg%2F11f5w8xg_l?hl=en&entry=ttu'>Get Directions</Link>

                        </div>
                    </div>
                    <div className='google-map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.7165896792408!2d-0.1927922221788026!3d5.608811579860932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf9baa1e540bad%3A0xd7de56cd03577988!2s2-4%20Noi%20Fetreke%20St%2C%20Accra!5e0!3m2!1sen!2sgh!4v1705515940289!5m2!1sen!2sgh"
                            style={{ border: '0' }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='map-text'>
                            <h3>Airport Residential Area</h3>
                            <p>2-4 Noi Fetreke St</p>
                            <Link target='_blank' href='https://www.google.com/maps/place/2-4+Noi+Fetreke+St,+Accra/@5.6088116,-0.1927922,17z/data=!3m1!4b1!4m9!1m2!2m1!1sillona!3m5!1s0xfdf9baa1e540bad:0xd7de56cd03577988!8m2!3d5.6088116!4d-0.1879213!16s%2Fg%2F11c67plnqq?entry=ttu'>Get Directions</Link>

                        </div>
                    </div>
                    <div className='google-map'>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.828423512986!2d-0.
                2586169251760336!3d5.5923555943883985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfdf99b1ea6b313d%
                3A0xca8f465a57b43f0a!2sNagla%20Cl%2C%20Accra!5e0!3m2!1sen!2sgh!4v1705494905531!5m2!1sen!2sgh"
                            style={{ border: '0' }} allowfullscreen=""
                            loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        <div className='map-text'>
                            <h3>Official Town</h3>
                            <p>Nagla close</p>
                            <Link target='_blank' href='https://www.google.com/maps/place/Nagla+Cl,+Accra/@5.592356,-0.256042,16z/data=!4m6!3m5!1s0xfdf99b1ea6b313d:0xca8f465a57b43f0a!8m2!3d5.5923556!4d-0.256042!16s%2Fg%2F11f5w8xg_l?hl=en&entry=ttu'>Get Directions</Link>

                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default Contact