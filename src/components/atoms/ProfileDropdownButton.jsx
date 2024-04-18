import { useState } from 'react';

const ProfileDropdownButton = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => setShowDropdown(!showDropdown);

  return (
    <div className="relative">
      <div onClick={toggleDropdown} className="cursor-pointer">
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5.121 17.804A1.12 1.12 0 014 16.89V7.11c0-.552.498-.999 1.12-.914l14.76 2.11a1.12 1.12 0 011.12 1.104v8.78a1.12 1.12 0 01-1.12 1.104l-14.76-2.11z"></path>
        </svg>
      </div>
      {showDropdown && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-yellow-400 rounded shadow-xl z-10">
          <a href="/login" className="block px-4 py-2 text-dark-brown hover:underline">Login</a>
          <a href="/register" className="block px-4 py-2 text-dark-brown hover:underline">Register</a>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdownButton;





























