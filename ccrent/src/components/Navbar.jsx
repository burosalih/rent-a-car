import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="container md:mx-auto px-10 font-semibold">
      <nav className="my-3">
        <header className="flex items-center justify-between w-full bg-white h-14">
          <div className="flex items-center">
            <a href="/" className="mr-8 md:mr-10">
              <img src="/CCR.png" alt="Logo" className="h-8" />
            </a>
            <div className="hidden md:flex items-center">
              <a href="/" className="mr-4 text-gray-700 hover:text-gray-900">
                O nama
              </a>
              <a
                href="/kontakt"
                className="mr-4 text-gray-700 hover:text-gray-900"
              >
                Kontakt
              </a>
            </div>
          </div>
          <div className="flex ml-32 justify-end md:hidden items-center">
            <GiHamburgerMenu
              className="text-gray-500 hover:text-gray-800 text-2xl"
              onClick={() => setShowMenu(!showMenu)}
            ></GiHamburgerMenu>
          </div>
          {showMenu && (
            <div className="md:hidden absolute top-14 -right-5 bg-white w-full py-2">
              <div className="flex flex-col mt-4">
                <a
                  href="/"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  O nama
                </a>
                <a
                  href="/kontakt"
                  className="block px-4 py-2 text-gray-700 hover:text-gray-900"
                >
                  Kontakt
                </a>
                <div className="flex flex-col gap-4 justify-center mt-4 ml-4 max-w-[100px]">
                  <Link
                    to="/login"
                    className="mr-2 text-white bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 rounded-lg text-center"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-lg md:block hidden"
                  >
                    Registracija
                  </Link>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center">
            <Link
              to="/login"
              className="mr-2 text-white bg-gradient-to-r from-orange-500 to-red-600 px-3 py-1 rounded-lg text-center hover:scale-95 duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-white bg-gradient-to-r from-cyan-500 to-blue-600 px-3 py-1 rounded-lg md:block hidden hover:scale-95 duration-300"
            >
              Registracija
            </Link>
          </div>
        </header>
      </nav>
    </div>
  );
};

export default Navbar;
