import React from 'react'
import Hero from '../components/Home/Hero'
import Contact from '../components/Home/Contact'
import Aiderive from '../components/Home/AiDerive'
import Whatweprovide from '../components/Home/Whatweprovide'
import Aboutus from '../components/Home/Aboutus'
import Footer from '../components/Home/Footer'
import Testimonials from '../components/Home/Testimonials'


function Home() {
  return (
   <div>
      <Hero />
      <Aiderive />
      <Whatweprovide/>
      <Aboutus />
      <Testimonials />
      <Contact />
      <Footer />
   </div>
  )
}

export default Home