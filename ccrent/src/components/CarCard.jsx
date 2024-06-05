import { useNavigate } from "react-router-dom";

const CarCard = ({ props }) => {
  const to_route = useNavigate();
  const navigate = (route) => {
    to_route(route);
  };

  return (
    <div className="">
      <div className="">
        <div className="bg-gray-400 w-full h-full rounded-xl">
          <img
            className="object-cover h-40 w-full hover:scale-105 duration-300 rounded-xl"
            src={props.img_url}
            alt="Slika"
          />
        </div>

        <div className="p-4">
          <div className="flex flex-row gap-1 items-baseline">
            <h2 className="text-md font-semibold">{props.brend}</h2>
            <h3 className="text-md font-semibold">{props.model}</h3>
          </div>
          <div className="py-3">
            <p className="text-gray-400">Cijena po danu</p>
            <h2 className="text-md font-semibold text-gray-600">{props.cijena}KM</h2>
          </div>
          <button
            className={`w-full py-2 rounded ${
              props.dostupnost ? 'bg-gradient-to-r from-orange-500 to-red-500 hover:scale-105 duration-300 text-white' : 'bg-gray-400 text-white cursor-not-allowed'
            }`}
            onClick={() => navigate(`/rent/${props.id}`)}
            disabled={!props.dostupnost}
          >
            {props.dostupnost ? 'Rent' : 'Nedostupno'}
          </button>
          <hr className="border-gray-300 my-3" />

          <div className="grid grid-cols-2 py-4 text-center">
            <div>
              <h3 className="text-xs font-medium text-gray-400">Mjenjač</h3>
              <p className="text-gray-600 font-semibold">{props.transmisija}</p>
            </div>
            <div>
              <h3 className="text-xs font-medium text-gray-400">Gorivo</h3>
              <p className="text-gray-600 font-semibold">{props.gorivo}</p>
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
  img_url: "",
  brend: "Default brand",
  model: "0000",
  cijena: "000",
  transmisija: "---",
  gorivo: "---",
  dostupnost: false,
};
