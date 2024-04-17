import { useState } from 'react';

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <header className="bg-yellow-300 text-dark-brown p-4 shadow-md flex justify-between items-center">
      <a href="/" className="text-2xl font-bold no-underline text-dark-brown">FlatFind</a>
      <div className="relative">
        <div className="flex items-center gap-4">
          <a href="#" 
             className="text-dark-brown hover:underline"
             onMouseEnter={() => setShowDropdown(false)}>About Us</a>
          <div onClick={() => setShowDropdown(!showDropdown)} className="cursor-pointer">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A1.12 1.12 0 014 16.89V7.11c0-.552.498-.999 1.12-.914l14.76 2.11a1.12 1.12 0 011.12 1.104v8.78a1.12 1.12 0 01-1.12 1.104l-14.76-2.11z"></path>
            </svg>
          </div>
          {showDropdown && (
            <div className="absolute mt-2 py-2 w-48 bg-yellow-300 rounded shadow-xl">
              <a href="#" className="block px-4 py-2 text-dark-brown hover:underline">Login</a>
              <a href="#" className="block px-4 py-2 text-dark-brown hover:underline">Register</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
