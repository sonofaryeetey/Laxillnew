import React from 'react'
import Image from 'next/image'

const Technologies = () => {
    const images = [
        '/images/excel.png',
        '/images/power-bi.png',
        '/images/python.png',
        '/images/tableau.png',
        '/images/mysql.png',
        'images/mongodb.png ',
        'images/Azure.png ',
        'images/copilot.png ',

    ]



    return (
        <div>
            <div className="tech-wrapper">
                <div className="container-header">
                    <div className="img-tech-wrapper">
                        {/* {images.map((image, i) => (
                        <div key={i} className=''>
                            <Image
                                src={image}
                                width={200}
                                height={100}
                            /></div>
                    ))} */}

                        <div className="img-slider show">
                            {images.map((image, i) => (
                                <div className="tech-img-wrapper "  key={i} >
                                    <img
                                        src={image}

                                    /></div>
                            ))}
                        </div>
                        <div className="img-slider show" >
                            {images.map((image, i) => (
                                <div className="tech-img-wrapper" style={{ display: "inline-block" }} key={i} >
                                    <img
                                        src={image}

                                    /></div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Technologies