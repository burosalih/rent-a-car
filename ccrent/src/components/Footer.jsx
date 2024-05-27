import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white border-t-8 border-orange-500">
      <div className="container pt-8 mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-10 sm:justify-between">
          <div className="px-4 sm:px-0 md:px-10">
            <h2 className="font-semibold text-lg mb-2">O Nama</h2>
            <p className="text-sm">Kratak opis naše firme i šta radimo</p>
          </div>
          <div className="px-4 sm:px-0 md:px-10 flex flex-col gap-2">
            <h2 className="font-semibold text-lg mb-2">CCRent</h2>
            <a href="/kontakt" className="text-sm">Kontakt</a>
          </div>
          <div className="px-4 sm:px-0 md:px-10">
            <h2 className="font-semibold text-lg mb-2">Pronađite nas</h2>
            <div className="flex space-x-4">
              <a href="#" className="text-sm">
                <FaInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-sm">
              <FaFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-sm">
              <FaTwitter className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <img src="/CCR.png" className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl p-4">

            </img>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 container mx-auto py-8 text-center">
        <p className="text-sm">© 2024 CCRent</p>
      </div>
    </footer>
  );
};

export default Footer;
