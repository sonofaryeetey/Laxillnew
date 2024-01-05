import React from 'react'
import Image from 'next/image'
import bg1 from '../../../public/images/data-analytics1.jpg'
import bg2 from '../../../public/images/data-analytics2.jpg'
import bg3 from '../../../public/images/data-analytics3.jpg'

const SectionServices = () => {
    return (
        <div className='section-services'>
            <div className="container">
                <h2 className=' text-3xl md:text-5xl '>What We Do</h2>
                <div className="underline"></div>
                <p className=' w-50'> At Laxill Company Limited, we're dedicated to helping businesses harness the power of data to make informed decisions, optimize processes, and achieve their goals. We specialize in data analytics, offering a wide range of services that turn raw data into actionable insights.
                </p>
            </div>

            <div className="container">
                <div className="card-wrapper">
                    <div className="card-section">

                        <div className="card">
                            <div className="card-image" style={{
                                // use the src property of the image object
                                backgroundImage: `url(${bg1.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* <Image
                                    className="width"
                                    src={"/images/data-analytics1.jpg"}
                                    width={500}
                                    height={500}

                                /> */}
                            </div>
                            <div className="card-text">
                                <h5>Data Analysis</h5>
                                <p>We provide comprehensive data analysis services that allow you to explore, visualize, and interpret your data. Whether you're dealing with structured or unstructured data, we have the expertise to uncover valuable patterns and trends that drive your business forward.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image" style={{
                                // use the src property of the image object
                                backgroundImage: `url(${bg2.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* <Image
                                    className="width"
                                    src={"/images/data-analytics1.jpg"}
                                    width={500}
                                    height={500}

                                /> */}
                            </div>
                            <div className="card-text">
                                <h5>Predictive Analytics</h5>
                                <p>
                                    Predictive analytics is at the heart of what we do. Our experts build models that help you anticipate future trends and make data-driven decisions. From demand forecasting to customer behavior prediction, we've got you covered.
                                </p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-image" style={{
                                // use the src property of the image object
                                backgroundImage: `url(${bg3.src})`,
                                // other styles
                                backgroundPosition: "center",
                                backgroundSize: "cover",
                                backgroundRepeat: "no-repeat",

                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {/* <Image
                                        className="width"
                                        src={"/images/data-analytics1.jpg"}
                                        width={500}
                                        height={500}

                                    /> */}
                            </div>
                            <div className="card-text">
                                <h5>Data Visualization</h5>
                                <p>Transforming data into meaningful visuals is a powerful way to communicate insights. Our data visualization services make complex data understandable and actionable, enabling your team to act on valuable information quickly.
                                </p>
                            </div>
                        </div>


                    </div>
                    <button className='button-testimonials'>See More</button>
                </div>


            </div>

        </div>
    )
}

export default SectionServices