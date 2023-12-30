import React from 'react'
import Stats from './Stats'

const Partners = () => {
    return (
        <div className='partners-section'>
            <div className="container">
            <h2 className='py-5 text-align'>Our Partners</h2>
            <p className='py-5'>At our data analytics company, we are proud to collaborate with a diverse range of partners who share our commitment to harnessing the power of data. Our partners include leading technology firms, innovative startups, and esteemed academic institutions. Together, we work to develop cutting-edge solutions that drive business growth, enhance operational efficiency, and create meaningful impact. Our partnerships are built on mutual trust and a shared vision for the future of data analytics. We believe that through these collaborations, we can unlock new opportunities and redefine what’s possible in the data-driven world.</p>

            </div>
            <div className='partners-info'>
                

                <Stats/>
                <div className="bg-drop"></div>


            </div>
            
        </div>
    )
}

export default Partners