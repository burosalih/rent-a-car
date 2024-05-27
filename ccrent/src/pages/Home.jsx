import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; 
import FeaturedCarsSection from "../components/FeaturedCarsSection"; 
import CustomerReviews from "../components/CustomerReviews";

function Home() {
  const [showNavbarContent, setShowNavbarContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNavbarContent(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Navbar />
      <div className="mx-auto">
        <HeroSection />
        <FeaturedCarsSection />
        <CustomerReviews/>
      </div>
      <Footer />
    </>
  );
}

export default Home;
