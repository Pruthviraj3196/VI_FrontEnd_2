import React from 'react';
import Testimonials from '../components/Home/Testimonials';
import Footer from '../components/Home/Footer';
import Home from "../components/Training/Home"
import Internshippage from '../components/Training/Internshippage';


const Training = () => {
  return (
    <div>
       <Home />
       <Internshippage />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Training;