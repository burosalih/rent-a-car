import { useState, useEffect } from "react";
import axios from "axios";
import { FaTrash, FaPlus } from "react-icons/fa";

function Dashboard() {
  const [data, setData] = useState([]);
  const [header, setHeader] = useState([]);
  const [type, setType] = useState("users");
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [transmisija, setTransmisija] = useState("");
  const [gorivo, setGorivo] = useState("");

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
    const { name, value, checked, type } = e.target;

    if (type === "checkbox") {
      if (name === "transmisija") {
        setTransmisija((prevState) => {
          return checked ? value : "";
        });
      } else if (name === "gorivo") {
        setGorivo((prevState) => {
          return checked ? value : "";
        });
      }
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedFormData = { ...formData, transmisija, gorivo };

    axios
      .post(`http://localhost:8000/${type}`, updatedFormData)
      .then((response) => {
        setData((prevData) => [...prevData, response.data]);
        setIsOpen(false);
        setTransmisija("");
        setGorivo("");
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
      setHeader([
        "id",
        "brend",
        "model",
        "transmisija",
        "gorivo",
        "cijena",
        "dostupnost",
      ]);
    } else if (type === "rents") {
      setHeader([
        "id",
        "dan_rentanja",
        "dan_povratka",
        "cijena",
        "user_id",
        "car_id",
      ]);
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
              className={`mr-4 focus:outline-none ${
                type === "users" ? "text-orange-500" : ""
              }`}
              onClick={() => handleViewChange("users")}
            >
              Korisnici
            </button>
            <button
              className={`mr-4 focus:outline-none ${
                type === "cars" ? "text-orange-500" : ""
              }`}
              onClick={() => handleViewChange("cars")}
            >
              Vozila
            </button>
            <button
              className={`mr-4 focus:outline-none ${
                type === "rents" ? "text-orange-500" : ""
              }`}
              onClick={() => handleViewChange("rents")}
            >
              Narudzbe
            </button>
          </div>
          <button
            className="p-2 bg-white text-orange-500 font-semibold rounded-lg hover:bg-orange-500 hover:text-white duration-300"
            onClick={handleLogout}
          >
            Home
          </button>
        </header>
        <main className="p-4">
          <div className="border-2 rounded-md">
            <div className="overflow-x-auto">
              <div className="p-8">
                <table className="w-full border-collapse">
                  <thead>
                    <tr>
                      {header.map((title) => (
                        <th key={title} className="border px-4 py-2 text-left">
                          {title}
                        </th>
                      ))}
                      <th className="border px-4 py-2 text-left">opcije</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        {header.map((column) => (
                          <td key={column} className="border px-4 py-2">
                            {column === "dostupnost"
                              ? item[column]
                                ? "Da"
                                : "Ne"
                              : item[column]}
                          </td>
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
              {type === "cars" && (
                <button
                  onClick={() => setIsOpen(true)}
                  className="ml-8 mb-8 text-blue-500 hover:bg-blue-500 border border-blue-500 hover:text-white text-xl p-2 rounded flex flex-row items-center"
                  aria-label="Add"
                >
                  <FaPlus className="h-6 w-6 mr-2" />
                  Dodaj Auto
                </button>
              )}
            </div>
          </div>
        </main>
        {isOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-8 rounded-md shadow-md w-full max-w-md">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="block text-gray-700">Brend</label>
                  <input
                    type="text"
                    name="brend"
                    value={formData.brend || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Model</label>
                  <input
                    type="text"
                    name="model"
                    value={formData.model || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Mjenjač</label>
                  <div className="flex">
                    <label className="mr-4">
                      <input
                        type="checkbox"
                        name="transmisija"
                        value="Automatik"
                        checked={transmisija === "Automatik"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Automatski
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="transmisija"
                        value="Manuelni"
                        checked={transmisija === "Manuelni"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Manuelni
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Gorivo</label>
                  <div className="flex">
                    <label className="mr-4">
                      <input
                        type="checkbox"
                        name="gorivo"
                        value="Benzin"
                        checked={gorivo === "Benzin"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Benzin
                    </label>
                    <label className="mr-4">
                      <input
                        type="checkbox"
                        name="gorivo"
                        value="Dizel"
                        checked={gorivo === "Dizel"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Dizel
                    </label>
                    <label>
                      <input
                        type="checkbox"
                        name="gorivo"
                        value="Hibrid"
                        checked={gorivo === "Hibrid"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      Hibrid
                    </label>
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Cijena</label>
                  <input
                    type="number"
                    name="cijena"
                    value={formData.cijena || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">Dostupnost</label>
                  <select
                    name="dostupnost"
                    value={formData.dostupnost || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  >
                    <option value="">Odaberi...</option>
                    <option value="true">Da</option>
                    <option value="false">Ne</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700">URL Slike</label>
                  <input
                    type="text"
                    name="img_url"
                    value={formData.img_url || ""}
                    onChange={handleChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    required
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-700 mr-2"
                  >
                    Otkaži
                  </button>
                  <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                  >
                    Dodaj auto
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
