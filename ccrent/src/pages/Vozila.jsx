import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";

function Vozila() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8000/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error loading cars:", error);
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
