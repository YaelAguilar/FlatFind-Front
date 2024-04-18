const SearchBar = () => {
  return (
    <div className="w-full max-w-md flex">
      <input
        type="text"
        placeholder="Buscar propiedades..."
        className="border-2 border-r-0 border-gray-300 bg-white h-10 px-5 rounded-l-lg text-sm focus:outline-none w-full"
      />
      <button
        type="submit"
        className="bg-yellow-400 hover:bg-yellow-500 text-dark-brown font-bold p-2 rounded-r-lg transition-colors duration-200"
      >
        <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
