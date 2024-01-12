import Link from 'next/link'
import React from 'react'

const HeroSectionVAriant = () => {
    return (
        <section className="herovariant">
            <div class="custom-shape-divider-bottom-1705044834 waveTilt">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" class="shape-fill"></path>
                </svg>
            </div>

            <div class="custom-shape-divider-bottom-1704969244 waveSvg">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
            </div>
            <div className="container">
                <div className="content-new">
                    <div className="content-new-text">
                        <h1>Make Smart Decisions And Drive Profitability Through Insights </h1>
                        <p>Be empowered by data-driven insights that drive growth and innovation. With our help, small and medsize businesses can unlock the power of their data and use to make better decisions, improve operations, and drive growth.</p>
                        <button className='buttonplane w-full'><Link href='/Contact'>Get started</Link></button>
                    </div>
                    <div className="content-new-img">
                        <img src="images/delegates-hero-img.webp" alt="heroNew" />
                    </div>

                </div>
            </div>

        </section>
    )
}

export default HeroSectionVAriant