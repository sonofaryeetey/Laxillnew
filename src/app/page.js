"use client"

import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
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
      <AnimatePresence>
        <motion.div
        initial={{opacity:0, y:15}}
        animate={{opacity:1, y:0}}
        exit={{opacity:0, y:15}}
        transition={0.25}
        >
          <HeroSection />
          <HeroSectionVAriant />
          <Technologies />
          <SectionServices />
          <Brief />
          <Partners />
          <Cta />
          <Testimonials />

        </motion.div>
      </AnimatePresence>
    </main>
  )
}
