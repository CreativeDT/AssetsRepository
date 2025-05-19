import React from 'react'
import Navbar from '../Navbar/Navbar'
import CategoriesPage from '../../Components/Categories'
// import ContactUs from '../ContactUs/ContactUs'
import LandingPage from './LandingPage'
import Footer from './Footer/Footer'
import FeaturedSection from '../../Components/FeaturedSection'

const LandingScreen = () => {
  return (
   <div >
      <Navbar />
      <div className="pt-14">
      <LandingPage />
      <FeaturedSection />
      
        <CategoriesPage/></div>
        <Footer />
        {/* <div id="contact-us-section">
        <ContactUs />
        </div> */}
    </div>
  )
}

export default LandingScreen
