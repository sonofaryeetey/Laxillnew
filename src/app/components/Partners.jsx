import React from 'react'
import Stats from './Stats'

const Partners = () => {
    return (
        <div className='partners-section' style={{
            background:'url(images/growth-graph.png)',
            backgroundSize:'60%',
            backgroundImageOpacity:'0.5',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundPositionY:'70px',

            }}>
            <div className="container-header">
                <h2 className='py-5 text-align'>Our Partners</h2>
                <div className="underline"></div>
                <div className='partners-wrapper'>
                    <div className="partners-text">
                        <h1>Partner Program</h1>
                        <p className='py-5'>Embraced by a roster of rapidly expanding
                            enterprises, collaboration through real-life stories
                            empowers technology, channel, and portfolio partners
                            to provide unparalleled solutions in the realm of
                            comprehensive analytics automation and management.</p>
                            <button className='partner-button'>Become A Partner</button>
                    </div>
                    <div className="partner-image-wrapper">
                        <img src="images/man_yellow_bg.png" alt="" srcset="" />
                    </div>
                </div>

            </div>
            <div className="container-header">
                
                <div className='partners-wrapper bg-color'>
                  
                    <div className="partner-image-wrapper">
                        <img src="images/imac.png" alt="" srcset="" />
                    </div>
                    <div className="partners-text">
                        <h1>Achieve your business goals at an accelerated pace. <br/>Take the first step</h1>
                        <p className='py-5'>Explore how partnering with Laxill and other industry-leading partners can enable digital tranformation for your business</p>
                            {/* <button className='partner-button'>Become A Partner</button> */}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Partners