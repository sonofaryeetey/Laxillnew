import Link from 'next/link'
import React from 'react'

const SubheroSection = ({info}) => {
    console.log((window.screen.width))
  return (
    <div className="subherosection relative" style={{ 
                                                    backgroundImage:window!=undefined && ( window.screen.width >= 900? info.url:"url(./images/hot-air-balloons.jpg)"),
                                                    backgroundSize:'cover',
                                                    backgroundPosition:'center',
                                                    
                                                }}>

    <div className='subhero-container relative container'>
    <div className='subhero-text relative'>
         
         {/* <h2 className='text-2xl'><span className='text-gradient'>{info.Heading}.</span></h2>
         <h3 className='text-3xl md:text-6xl'><span className=''> {info.Tag}</span></h3>
         <div className='underline '></div> */}
         {/* <p className='my-6 w-85'> Providing insights from raw data to drive strategic decision-making and optimize business operations.</p> */}
         {/* <button className='button'>Get started</button> */}

         <div>
          <h1 className=' md:text-4xl pb-6'>Partner with Laxill and gain a competitive edge</h1>
          <p className='  md:text-xl pr-14'>Unlock your business potential with tailored data solutions.</p>
          <p className='md:text-xl pb-6 pr-14'>{`Let's transform your data into your most valuable asset together.`}</p>

          <button className='button-about'><Link href="/Contact">Get started</Link></button>
         </div>
     </div>

    </div>

 <div className='overlay' style={window !=undefined &&( window.screen.width < 901? {opacity:info.opacity}: {opacity:0})}></div>

</div>
  )
}

export default SubheroSection