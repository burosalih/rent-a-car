import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";

function Vozila() {
  const [cars, setCars] = useState([]);

  const placeholderCars = [
    {
      id: 1,
      img: "/images/placeholder1.jpg",
      brand: "Renault",
      model: "Clio",
      price: "35",
      gearbox: "Manuelni",
      type: "Dizel",
      available: "Da",
    },
    {
      id: 2,
      img: "/images/placeholder2.jpg",
      brand: "Škoda",
      model: "Octavia",
      price: "40",
      gearbox: "Automatik",
      type: "Benzin",
      available: "Ne",
    },
    {
      id: 3,
      img: "/images/placeholder3.jpg",
      brand: "Mercedes-Benz",
      model: "E220",
      price: "50",
      gearbox: "Automatik",
      type: "Dizel",
      available: "Da",
    },
  ];

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/cars").then((response) => {
      setCars(response.data.data);
    }).catch(() => {
      setCars(placeholderCars);
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {cars.map((car) => (
                <div key={car.id} className="flex flex-col">
                  <CarCard props={car} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Vozila;
