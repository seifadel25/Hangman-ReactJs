import React, { useState } from "react";

const Items = ["Sports", "Animals", "Countries", "Fruits"];

function Header({ changeTopic }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className=" bg-slate-700 p-10 py-4 flex flex-wrap text-end md:justify-between items-center text-white flex-row">
      <div className="w-10/12 md:w-4/12">
        <h1 className="text-xl text-center font-extrabold">HANGMAN</h1>
      </div>

      {/* Hamburger Icon */}
      <div className="md:hidden w-2/12 md:w-8/12 flex justify-end" onClick={toggleMenu}>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          ></path>
        </svg>
      </div>

      {/* Menu */}
      <nav
        className={`${isMenuOpen ? " w-full h-full flex justify-center items-center" : "hidden"} md:block`}
      >
        <ul className="flex flex-col md:flex-row gap-10 my-8">
          {Items.map((item) => (
            <li key={item}>
              <button
                onClick={() => {
                  changeTopic(item);
                  setIsMenuOpen(false);
                }} // Close menu upon selection
                className="p-4 py-1 bg-white/90 text-slate-700 rounded-lg font-bold block hover:bg-slate-300 hover:scale-110 transition-all"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
