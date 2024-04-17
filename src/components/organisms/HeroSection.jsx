import SearchBar from '../molecules/SearchBar';

const HeroSection = () => {
  return (
    <div className="bg-white text-gray-800 p-8 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-center">Bienvenido a FlatFind</h1>
      <p className="mt-2 text-lg text-center">Encuentra el lugar perfecto para tu próxima aventura en Chiapas!</p>
      <div className="mt-4 w-full flex justify-center">
        <SearchBar />
      </div>
    </div>
  );
};

export default HeroSection;
