import React from 'react'

const Brief = () => {
  return (
    <div className='brief-section'>
      <div className="container">
        <div className="brief-info">
          <h2> Utilize meaningful
            findings to guide and 
             <span className=''> elevate</span> your business operations</h2>
          <div className='bold'>
            <h5 className='text-xl text-white font-bold'> Streamline the business proces</h5>
            <ul>
                        <li>
                            
                            <p className="text-gray-500 leading-relaxed mt-3">
                            Work with our highly skilled data analysts to help 
translate insights into impact.
                        </p></li>
                        <li>
                            
                            <p className="text-gray-500 leading-relaxed mt-3">
                            Make use of Big Data and machine learning (ML) 
technologies to discover patterns in your 
unstructured data.
                        </p></li>
                        <li>
                            
                            <p className="text-gray-500 leading-relaxed mt-3">
                            Foster a data-driven culture across your team with
our self-service dashboards.
                        </p></li>
                        
                    </ul>
            <button className='contact-btn mt-5  '>Get in touch</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Brief