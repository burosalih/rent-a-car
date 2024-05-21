import { useNavigate } from "react-router-dom";

const CarCard = ({ props }) => {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };
  return (
    <div className="">
      <div className="">
          <div className="bg-gray-400 w-full h-full">
          <img
  className="object-cover h-40 w-full"
  src={props.img_url}
  alt="Slika"
/>  
        </div>

        <div className="p-4">
          <div className="flex flex-row gap-1 items-baseline">
            <h2 className="text-md font-semibold">{props.brend}</h2> {/* Updated to brend */}
            <h3 className="text-md font-semibold">{props.model}</h3>
          </div>
          <div className="py-3">
            <p className="text-gray-400">Cijena po danu</p>
            <h2 className="text-md font-semibold text-gray-600">{props.cijena}KM</h2> {/* Updated to cijena */}
          </div>
          <button
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:scale-95 duration-300 text-white py-2 rounded"
            onClick={() => navigate(`/rent/${props.id}`)}
          >
            Rent
          </button>
          <hr className="border-gray-300 my-3" />

          <div className="grid grid-cols-3 py-4 text-center">
            <div>
              <h3 className="text-xs font-medium text-gray-400">
                Mjenjač
              </h3>
              <p className="text-gray-600 font-semibold">
                {props.transmisija} {/* Updated to transmisija */}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400">
                Gorivo
              </h3>
              <p className="text-gray-600 font-semibold">
                {props.gorivo} {/* Updated to gorivo */}
              </p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400">
                Dostupnost
              </h3>
              <p className="text-gray-600 font-semibold">
                {props.dostupnost === true // Updated to dostupnost
                  ? "Da"
                  : "Ne"}
              </p>
            </div>
          </div>

          <hr className="border-gray-300 my-0" />
        </div>
      </div>
    </div>
  );
};

export default CarCard;

CarCard.defaultProps = {
  img_url: "", // Updated to img_url
  brend: "Default brand", // Updated to brend
  model: "0000",
  cijena: "000", // Updated to cijena
  transmisija: "---", // Updated to transmisija
  gorivo: "---", // Updated to gorivo
  dostupnost: "---", // Updated to dostupnost
};
