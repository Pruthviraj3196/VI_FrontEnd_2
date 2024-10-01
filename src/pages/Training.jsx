import React from 'react';
import Testimonials from '../components/Home/Testimonials';
import Footer from '../components/Home/Footer';
import Home from "../components/Training/Home"
import Internshippage from '../components/Training/Internshippage';
import InternshipCard from '../components/Training/InternshipCard';
import Applyinternship from '../components/Training/Applyinternship';


const Training = () => {
  return (
    <div>
      <Home />
      <Applyinternship />
      <Internshippage />
      <InternshipCard />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default Training;