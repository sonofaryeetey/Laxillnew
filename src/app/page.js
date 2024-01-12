import Image from 'next/image'
import HeroSection from './components/HeroSection'
import Technologies from './components/Technologies'
import SectionServices from './components/SectionServices'
import Brief from './components/Brief'
import Footer from './components/Footer'
import Partners from './components/Partners'
import Testimonials from './components/Testimonials'
import Cta from './components/Cta'
import HeroSectionVAriant from './components/HeroSectionVAriant'

export default function Home() {
  return (
    <main>
      <HeroSection/>
      <HeroSectionVAriant/>
      <Technologies/>
      <SectionServices/>  
      <Brief/>
      <Partners/>
      <Cta/>
      <Testimonials/>
      {/* <Footer/> */}
    </main>
  )
}
