import React from "react";
import Navbar from "../Navbar/Navbar";
import CategoriesPage from "../../Components/Categories";
// import ContactUs from '../ContactUs/ContactUs'
import LandingPage from "./LandingPage";
import Footer from "./Footer/Footer";
import FeaturedSection from "../../Components/FeaturedSection";

const LandingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14 pb-24">
        {" "}
        {/* Add bottom padding for footer */}
        <LandingPage />
        <FeaturedSection />
        <CategoriesPage />
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </footer>

      {/* <div id="contact-us-section">
        <ContactUs />
      </div> */}
    </div>
  );
};

export default LandingScreen;
