import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="mx-auto my-16 px-4 md:px-16 ">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">O nama</h2>
            <p className="text-lgleading-relaxed text-center">
              CCRent je agencija za iznajmljivanje automobila koja se ponosi svojom reputacijom visokokvalitetne usluge i povoljnih cijena. Naš cilj je omogućiti našim klijentima jednostavan pristup kvalitetnim vozilima po konkurentnim cijenama. Bez obzira da li vam treba automobil za poslovna putovanja ili odmor, mi smo tu da vam pružimo najbolje iskustvo.
            </p>
          </div>

          <div className="bg-gradient-to-r from-gray-500 to-gray-800 text-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Zašto odabrati CCRent?</h2>
            <ul className="text-lg list-disc pl-6 leading-relaxed">
              <li>Povoljne cijene rentanja automobila.</li>
              <li>Raznolika ponuda vozila prilagođena svakom budžetu i potrebama.</li>
              <li>Brza i jednostavna procedura rentanja.</li>
              <li>Profesionalno i ljubazno osoblje koje je tu da vam pomogne.</li>
              <li>Kvalitetna vozila koja se redovno održavaju i čiste.</li>
            </ul>
          </div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Pronađite nas
        </h2>
      <div className="w-full flex justify-center mt-8">
        <div className="border border-gray-300 rounded-xl w-[1000px]">
          <iframe
            title="Google Maps"
            width="100%"
            height="500"
            frameborder="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lond%C5%BEa%2092+(CCRent)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
