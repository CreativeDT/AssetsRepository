import React from "react";
import Navbar from "../Navbar/Navbar";
import CategoriesPage from "../../Components/Categories";
import LandingPage from "./LandingPage";
import Footer from "./Footer/Footer";
import FeaturedSection from "../../Components/FeaturedSection";

const LandingScreen = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-14 pb-24 space-y-1">
        <LandingPage />
        <FeaturedSection />
        <CategoriesPage />
      </main>

      <footer className="fixed bottom-0 left-0 w-full z-50">
        <Footer />
      </footer>
    </div>
  );
};

export default LandingScreen;
