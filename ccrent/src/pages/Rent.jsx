import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Rent() {
  const navigation = useNavigate();
  const navigate = (route) => navigation(route);
  const params = useParams();
  const [car, setCar] = useState({
    id: 1,
    img: "/images/placeholder1.jpg",
    brand: "Renault",
    model: "Clio",
    price: "35",
    gearbox: "Manuelni",
    type: "Dizel",
    available: "Da",
  });
  const rentalDate = useRef("");
  const returnDate = useRef("");
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/api/cars/${params.id}`)
      .then((response) => {
        setCar(response.data.data[0]);
      });
  }, [params.id]);

  useEffect(() => {
    calculatePrice();
  }, []);

  const calculatePrice = () => {
    const rental_date = Date.parse(rentalDate.current.value);
    const return_date = Date.parse(returnDate.current.value);
    const now = new Date().getTime();

    const rentDuration = return_date - rental_date;
    if (rentalDate.current.value && returnDate.current.value) {
      if (rental_date < now || return_date < now) {
        setTotalPrice(0);
      } else if (rentDuration <= 0) {
        setTotalPrice(0);
      } else {
        const price = (rentDuration / (1000 * 60 * 60 * 24)) * car.price;
        setTotalPrice(price);
      }
    }
  };

  const handleRentalDateChange = () => {
    calculatePrice();
  };

  const handleReturnDateChange = () => {
    calculatePrice();
  };

  function rentACar(e) {
    e.preventDefault();

    const rental_date = Date.parse(rentalDate.current.value);
    const return_date = Date.parse(returnDate.current.value);
    const now = new Date().getTime();
    const rentDuration = return_date - rental_date;

    if (rental_date < now || return_date < now) {
      console.log("Please select a valid rental and return dates.");
    } else if (rentDuration <= 0) {
      console.log("You can rent for 1 day at least.");
    } else {
      const price = (rentDuration / (1000 * 60 * 60 * 24)) * car.price;

      const rent = {
        rental_date: rentalDate.current.value,
        return_date: returnDate.current.value,
        price: price,
        user_id: localStorage.getItem("id"),
        car_id: params.id,
      };
      console.log(rent);
      if (rentalDate.current.value !== "" && returnDate.current.value !== "") {
        axios
          .post("http://127.0.0.1:8000/api/rents", rent)
          .then((response) => {
            navigate("/vozila");
          })
          .catch((error) => {
            console.error("Error creating rent:", error);
          });
      }
    }
  }

  return (
    <>
      <Navbar/>
      <div className="h-screen flex items-center justify-center">
        <div className="flex flex-col lg:flex-row max-w-4xl w-full bg-white shadow-xl rounded-md overflow-hidden">
          <div className="lg:w-1/2 h-64 lg:h-auto relative">
            <img
              className="w-full h-full object-cover"
              src={car.img}
              alt="Car"
            />
          </div>
          <div className="lg:w-1/2 p-8 bg-white">
            <div className="flex flex-col justify-center h-full">
              <h2 className="text-2xl font-semibold mb-4">{car.brand}</h2>
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
                  <span className="font-semibold text-gray-600">
                    Cijena
                  </span>
                  <div className="flex items-center">
                    <span className="text-xl font-medium text-gray-600 mr-1">
                      sračunataCijena
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
      <Footer/>
    </>
  );
}

export default Rent;
