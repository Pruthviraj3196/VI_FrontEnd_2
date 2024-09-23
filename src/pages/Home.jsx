import React from 'react'
import Hero from '../components/Home/Hero'
import Contact from '../components/Home/Contact'

import Whatweprovide from '../components/Home/Whatweprovide'
import Aboutus from '../components/Home/Aboutus'
import Footer from '../components/Home/Footer'
import Testimonials from '../components/Home/Testimonials'
import Section from '../components/Home/Section'



function Home() {
  return (
   <div>
      <Hero />
      <Section />
      <Whatweprovide/>
      <Aboutus />
      <Testimonials />
      <Contact />
      <Footer />
   </div>
  )
}

export default Home