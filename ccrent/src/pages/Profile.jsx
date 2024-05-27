import { useAuth } from "../useAuth";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Profile() {
  const { user } = useAuth();
  const [rentals, setRentals] = useState([]);

  useEffect(() => {
    console.log("User in Profile:", user);
    if (user) {
      axios
        .get(`http://localhost:8000/rents?userId=${user.id}`)
        .then((response) => {
          const fetchCarDetails = response.data.map((rental) => {
            return axios.get(`http://localhost:8000/cars/${rental.car_id}`);
          });

          Promise.all(fetchCarDetails)
            .then((carResponses) => {
              const rentalsWithCarDetails = response.data.map((rental, index) => {
                const car = carResponses[index].data;
                return {
                  ...rental,
                  brend: car.brend,
                  model: car.model,
                  img_url: car.img_url,
                };
              });
              setRentals(rentalsWithCarDetails);
            })
            .catch((error) => {
              console.error("Error fetching car details:", error);
            });
        })
        .catch((error) => {
          console.error("Error fetching rentals:", error);
        });
    }
  }, [user]);

  function handleCancelRental(rentalId, carId) {
    axios
      .delete(`http://localhost:8000/rents/${rentalId}`)
      .then(() => {
        axios
          .patch(`http://localhost:8000/cars/${carId}`, { dostupnost: true })
          .then(() => {
            setRentals(rentals.filter((rental) => rental.id !== rentalId));
          })
          .catch((error) => {
            console.error("Error updating car availability:", error);
          });
      })
      .catch((error) => {
        console.error("Error cancelling rental:", error);
      });
  }

  return (
    <>
      <Navbar />
      <div className="container h-screen mx-auto px-4 py-8">
        <div className="bg-blue-50 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4 text-orange-500">{user?.ime} {user?.prezime}</h1>
          <h3 className="text-lg font-semibold mb-4">Vaši unajmljeni automobili</h3>
          {rentals.length > 0 ? (
            <ul className="space-y-4">
              {rentals.map((rental) => (
                <li key={rental.id} className="bg-white p-4 shadow rounded-lg">
                  <div className="flex items-center justify-start gap-8">
                    <img src={rental.img_url} alt={`${rental.brend} ${rental.model}`} className="w-16 h-16 object-contain" />
                    <div>
                      <h4 className="text-md font-bold">{rental.brend} {rental.model}</h4>
                      <p>Datum unajmljivanja: {rental.rental_date}</p>
                    </div>
                    <button
                      onClick={() => handleCancelRental(rental.id, rental.car_id)}
                      className="text-sm text-white bg-red-500 rounded-lg p-2 font-semibold hover:underline mt-2"
                    >
                      Otkaži rentu
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p>Nemate aktivnih renti.</p>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Profile;
