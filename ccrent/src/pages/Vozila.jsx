import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import CarCard from "../components/CarCard";
import Footer from "../components/Footer";
import { FaSearch } from "react-icons/fa";

function Vozila() {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    axios.get("http://localhost:8000/cars")
      .then((response) => {
        setCars(response.data);
      })
      .catch((error) => {
        console.error("Error loading cars:", error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredCars = cars.filter(car =>
    car.brend.toLowerCase().includes(searchQuery.toLowerCase()) ||
    car.model.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow">
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-4 flex flex-row items-center">
            <FaSearch className="h-8 w-8 text-gray-300 text-center mr-2"/>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchChange}
                placeholder="Pretraži po brendu ili modelu"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
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
