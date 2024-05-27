import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const FeaturedCarsSection = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8000/cars")
      .then((response) => {
        const availableCars = response.data.filter((car) => car.dostupnost === true);
        setFeaturedCars(availableCars.slice(0, 3));
      })
      .catch((error) => {
        console.error("Error fetching featured cars:", error);
      });
  }, []);

  return (
    <div className="my-16 mx-16">
      <h2 className="text-3xl font-bold mb-8 text-center">Izdvojena vozila</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {featuredCars.map((car) => (
          <div key={car.id} className="bg-gray-100 shadow-md rounded-lg p-4">
            <img src={car.img_url} alt="Vozilo" className="w-full h-64 object-cover rounded-lg mb-4" />
            <h3 className="text-xl font-semibold mb-2">{car.brend} {car.model}</h3>
            <p className="text-gray-600">Cijena po danu: {car.cijena} KM</p>
            <button 
              className="bg-gray-600 hover:bg-orange-500 duration-300 text-white py-2 px-4 mt-4 rounded-lg"
              onClick={() => navigate(`/rent/${car.id}`)}
            >
              Rent
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedCarsSection;
