const SearchBar = () => {
  return (
    <div className="mt-4">
      <input
        type="text"
        placeholder="¿A donde quieres ir?"
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none w-full"
      />
      <button
        type="submit"
        className="absolute right-0 top-0 mt-5 mr-4"
      >
        <svg className="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M10,20A10,10,0,1,1,20,10,10.012,10.012,0,0,1,10,20Zm0-18a8,8,0,1,0,8,8A8.009,8.009,0,0,0,10,2Z"/>
          <path d="M21.707,20.293l-5.4-5.4A1,1,0,0,0,15,15H14.32a7.984,7.984,0,0,0,1.562-2.61L21,18.707a1,1,0,0,0,1.414-1.414l-5.4-5.4A7.984,7.984,0,0,0,17,10.68V10a1,1,0,0,0-2,0v.68A7.984,7.984,0,0,0,12.61,8.118L8.293,4.707A1,1,0,0,0,6.879,6.121l4.317,4.317A7.984,7.984,0,0,0,10.68,13H10a1,1,0,0,0,0,2h.68a7.984,7.984,0,0,0,2.61,1.562l-4.317,4.317a1,1,0,1,0,1.414,1.414l4.317-4.317a7.984,7.984,0,0,0,2.61,1.562V20a1,1,0,0,0,2,0V19.32A7.984,7.984,0,0,0,19.32,17.562l5.4,5.4a1,1,0,0,0,1.414-1.414Z"/>
        </svg>
      </button>
    </div>
  );
};

export default SearchBar;
