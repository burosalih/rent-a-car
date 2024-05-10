import React from "react";

const FeaturedCarsSection = () => {
  return (
    <div className="my-16 mx-16">
      <h2 className="text-3xl font-bold mb-8">Izdvojena vozila</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="/clio.jpg" alt="Vozilo" className="w-full h-50 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ime vozila</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-gray-600 hover:bg-orange-500 duration-300 text-white py-2 px-4 mt-4 rounded-lg">Rent</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="/clio.jpg" alt="Vozilo" className="w-full h-50 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ime vozila</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-gray-600 hover:bg-orange-500 duration-300 text-white py-2 px-4 mt-4 rounded-lg">Rent</button>
        </div>
        <div className="bg-white shadow-md rounded-lg p-4">
          <img src="/clio.jpg" alt="Vozilo" className="w-full h-50 object-cover rounded-lg mb-4" />
          <h3 className="text-xl font-semibold mb-2">Ime vozila</h3>
          <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <button className="bg-gray-600 hover:bg-orange-500 duration-300 text-white py-2 px-4 mt-4 rounded-lg">Rent</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarsSection;
