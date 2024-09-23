import React from 'react'
import Hero from '../components/Home/Hero'
import Services from '../components/Home/Services'
import Trainings from '../components/Home/Trainings'
import Contact from '../components/Home/Contact'

function Home() {
  return (
   <div>
      <Hero />
      <Services />
      <Trainings />
      <Contact />
   </div>
  )
}

export default Home