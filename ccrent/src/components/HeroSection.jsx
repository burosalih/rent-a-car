import React from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="flex h-[400px] md:h-[500px] gap-4 md:gap-0 md:flex-row flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url(https://advertising.expedia.com/wp-content/uploads/2020/08/Car-Hero_1920x800.jpg)" }}>
      <div className="w-[400px] md:w-1/2 bg-gray-900 bg-opacity-50 p-8 rounded-3xl">
        <div className="space-y-7">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Dobrodošli u CCRent</h1>
          <p className="text-lg text-white">Iznajmite vozilo po najpovoljnijim cijenama u samo par klikova</p>
          <Link to="/cars" className="text-lg bg-gray-800 hover:bg-orange-500 duration-500 text-white py-2 px-4 rounded-lg inline-block mt-4">Pogledajte vozila</Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
