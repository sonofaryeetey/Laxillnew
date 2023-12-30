import React from 'react'
import Image from 'next/image'
import bg1 from '../../../public/images/data-analytics1.jpg'
import bg2 from '../../../public/images/data-analytics2.jpg'
import bg3 from '../../../public/images/data-analytics3.jpg'

const SectionServices = () => {
    return (
        <div className='section-services'>
            <div className="container">
                <h2 className=' text-3xl md:text-5xl '>What we do</h2>
                <p className=' w-50'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate quibusdam id earum est rerum, quia nam ad fuga quo illum delectus quam doloribus dolorem expedita temporibus et, voluptatibus maxime eligendi!</p>
            </div>

            <div className="container">
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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium expedita dicta? Blanditiis dignissimos esse eius placeat reprehenderit, ex possimus voluptatibus neque. Vel, laboriosam aperiam. Dolores, odio. Recusandae, voluptate voluptatem!</p>
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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium expedita dicta? Blanditiis dignissimos esse eius placeat reprehenderit, ex possimus voluptatibus neque. Vel, laboriosam aperiam. Dolores, odio. Recusandae, voluptate voluptatem!</p>
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
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia praesentium expedita dicta? Blanditiis dignissimos esse eius placeat reprehenderit, ex possimus voluptatibus neque. Vel, laboriosam aperiam. Dolores, odio. Recusandae, voluptate voluptatem!</p>
                        </div>
                    </div>
                  
                    
                </div>
            </div>

        </div>
    )
}

export default SectionServices