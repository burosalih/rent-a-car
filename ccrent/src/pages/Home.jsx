import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection"; // Import HeroSection component
import FeaturedCarsSection from "../components/FeaturedCarsSection"; // Import FeaturedCarsSection component

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
      </div>
      <Footer />
    </>
  );
}

export default Home;
