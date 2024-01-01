import React from 'react'
import Image from 'next/image'

const Technologies = () => {
    const images = [
        '/images/excel.png',
        '/images/power-bi.png',
        '/images/python.png',
        '/images/tableau.png',
        '/images/mysql.png',

    ]



    return (
        <div>
            <div className="tech-wrapper">
                <div className="container">
                    <div className="img-tech-wrapper">
                    {images.map((image, i) => (
                        <div key={i} className=''>
                            <Image
                                src={image}
                                width={100}
                                height={100}
                            /></div>
                    ))}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Technologies