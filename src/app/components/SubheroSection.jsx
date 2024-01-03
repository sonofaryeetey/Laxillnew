import React from 'react'

const SubheroSection = ({info}) => {
    console.log(info)
  return (
    <div className="subherosection relative" style={{ 
                                                    backgroundImage: info.url,
                                                    backgroundSize:'cover',
                                                    backgroundPosition:'center',
                                                    
                                                }}>

    <div className='subhero-container relative'>
    <div className='subhero-text relative'>
         
         <h2 className='text-2xl'><span className='text-gradient'>{info.Heading}.</span></h2>
         <h3 className='text-3xl md:text-6xl'><span className=''> {info.Tag}</span></h3>
         <div className='underline '></div>
         {/* <p className='my-6 w-85'> Providing insights from raw data to drive strategic decision-making and optimize business operations.</p> */}
         {/* <button className='button'>Get started</button> */}
     </div>

    </div>

 <div className='overlay' style={{opacity:info.opacity}}></div>

</div>
  )
}

export default SubheroSection