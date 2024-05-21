import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash } from "react-icons/fa";

function Dashboard() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [type, setType] = useState("users");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});

  const handleData = () => {
    axios
      .get(`http://localhost:8000/${type}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error loading data:", error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:8000/${type}/${id}`)
      .then(() => {
        setData((prevData) => prevData.filter((item) => item.id !== id));
      })
      .catch((error) => {
        console.error("Error deleting data:", error);
      });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:8000/${type}`, formData)
      .then((response) => {
        setData((prevData) => [...prevData, response.data]);
        setIsOpen(false);
      })
      .catch((error) => {
        console.error("Error adding data:", error);
      });
  };

  const handleViewChange = (view) => {
    setType(view);
  };

  const handleLogout = () => {
    window.location.href = "/";
  };

  useEffect(() => {
    handleData();
    if (type === "users") {
      setHeader(["id", "ime", "prezime", "broj", "email"]);
    } else if (type === "cars") {
      setHeader(["id", "brend", "model", "transmisija", "gorivo", "cijena", "dostupnost"]);
    } else if (type === "rents") {
      setHeader(["id", "rental_date", "return_date", "price", "user_id", "car_id"]);
    }
  }, [type]);

  return (
    <div className="min-h-screen">
      <div className="ml-0">
        <h1 className="text-white p-2 bg-gradient-to-r from-orange-500 to-red-500 text-center font-semibold">
          Admin dashboard
        </h1>
        <header className="flex justify-between items-center p-4 bg-gray-700 text-white">
          <div className="font-semibold">
            <button
              className={`mr-4 focus:outline-none ${type === "users" ? "text-orange-500" : ""}`}
              onClick={() => handleViewChange("users")}
            >
              Korisnici
            </button>
            <button
              className={`mr-4 focus:outline-none ${type === "cars" ? "text-orange-500" : ""}`}
              onClick={() => handleViewChange("cars")}
            >
              Vozila
            </button>
            <button
              className={`mr-4 focus:outline-none ${type === "rents" ? "text-orange-500" : ""}`}
              onClick={() => handleViewChange("rents")}
            >
              Narudzbe
            </button>
          </div>
          <button className="p-2 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white duration-300" onClick={handleLogout}>Logout</button>
        </header>
        <main className="p-4">
          <div className="border-2 rounded-md">
            <div className="overflow-x-auto">
              <div className="p-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {header.map((title) => (
                        <th key={title} className="border px-4 py-2 text-left">{title}</th>
                      ))}
                      <th className="border px-4 py-2 text-left">operations</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        {header.map((column) => (
                          <td key={column} className="border px-4 py-2">{item[column]}</td>
                        ))}
                        <td className="border px-4 py-2">
                          <button
                            onClick={() => handleDelete(item.id)}
                            className="text-red-500 hover:bg-red-500 hover:text-white p-2 rounded"
                            aria-label="Delete"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
