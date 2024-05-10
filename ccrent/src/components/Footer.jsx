import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 border-t border-gray-300">
      <div className="container py-10 mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <div className="px-4 sm:px-0 md:px-10">
            <h2 className="font-semibold text-lg mb-2">O Nama</h2>
            <p className="text-sm">Kratak opis naše firme i šta radimo</p>
          </div>
          <div className="px-4 sm:px-0 md:px-10 flex flex-col gap-2">
            <h2 className="font-semibold text-lg mb-2">CCRent</h2>
            <a href="#" className="text-sm">O nama</a>
            <a href="#" className="text-sm">Kontakt</a>
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
            <img src="/CCR.png"></img>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 container mx-auto py-8 text-center border-t border-gray-300">
        <p className="text-sm">© 2024 CCRent</p>
      </div>
    </footer>
  );
};

export default Footer;
