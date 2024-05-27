import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useAuth } from "../useAuth";

function Rent() {
  const navigate = useNavigate();
  const params = useParams();
  const [car, setCar] = useState(null);
  const rentalDate = useRef("");
  const returnDate = useRef("");
  const [totalcijena, setTotalcijena] = useState(0);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      navigate("/login");
      return;
    }

    axios
      .get(`http://localhost:8000/cars`)
      .then((response) => {
        const car = response.data.find((car) => car.id === params.id);
        if (car) {
          setCar(car);
        } else {
          console.error("Car not found");
        }
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });
  }, [params.id, navigate, user]);

  useEffect(() => {
    calculatecijena();
  }, [car]);

  const calculatecijena = () => {
    if (!car) return;
    const rental_date = Date.parse(rentalDate.current.value);
    const return_date = Date.parse(returnDate.current.value);
    const now = new Date().getTime();

    const rentDuration = return_date - rental_date;
    if (rentalDate.current.value && returnDate.current.value) {
      if (rental_date < now || return_date < now) {
        setTotalcijena(0);
      } else if (rentDuration <= 0) {
        setTotalcijena(0);
      } else {
        const cijena = (rentDuration / (1000 * 60 * 60 * 24)) * car.cijena;
        setTotalcijena(cijena);
      }
    }
  };

  const handleRentalDateChange = () => {
    calculatecijena();
  };

  const handleReturnDateChange = () => {
    calculatecijena();
  };

  const rentACar = (e) => {
    e.preventDefault();

    const rental_date = Date.parse(rentalDate.current.value);
    const return_date = Date.parse(returnDate.current.value);
    const now = new Date().getTime();
    const rentDuration = return_date - rental_date;

    if (rental_date < now || return_date < now) {
      console.log("Please select valid rental and return dates.");
    } else if (rentDuration <= 0) {
      console.log("You can rent for at least 1 day.");
    } else {
      const cijena = (rentDuration / (1000 * 60 * 60 * 24)) * car.cijena;

      const rent = {
        rental_date: rentalDate.current.value,
        return_date: returnDate.current.value,
        cijena: cijena,
        user_id: user.id,
        car_id: params.id,
      };

      if (rentalDate.current.value !== "" && returnDate.current.value !== "") {
        axios
          .post("http://localhost:8000/rents", rent)
          .then((response) => {
            axios
              .patch(`http://localhost:8000/cars/${params.id}`, { dostupnost: false })
              .then(() => {
                navigate("/vozila");
              })
              .catch((error) => {
                console.error("Error updating car availability:", error);
              });
          })
          .catch((error) => {
            console.error("Error creating rent:", error);
          });
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row max-w-4xl w-full bg-white shadow-xl rounded-md overflow-hidden">
          <div className="lg:w-full h-64 lg:h-auto relative">
            <img
              className="w-full h-full object-cover"
              src={`.${car?.img_url}`}
              alt="Auto"
            />
          </div>
          <div className="lg:w-1/2 p-8 bg-white">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-2xl font-semibold mb-4">
                {car?.brend} {car?.model}
              </h2>
              <form className="flex flex-col space-y-4">
                <label className="font-semibold text-gray-600">
                  Datum rentanja
                </label>
                <input
                  type="date"
                  ref={rentalDate}
                  onChange={handleRentalDateChange}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
                <label className="font-semibold text-gray-600">
                  Datum vraćanja
                </label>
                <input
                  type="date"
                  ref={returnDate}
                  onChange={handleReturnDateChange}
                  className="px-4 py-2 border border-gray-300 rounded focus:outline-none"
                />
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-gray-600">Cijena</span>
                  <div className="flex items-center">
                    <span className="text-xl font-medium text-gray-600 mr-1">
                      {totalcijena.toFixed(2)}
                    </span>
                    <span className="text-gray-500">KM</span>
                  </div>
                </div>
                <button
                  onClick={rentACar}
                  className="py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                >
                  Potvrdi rentanje
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Rent;
