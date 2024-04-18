import ProfileDropdownButton from '../atoms/ProfileDropdownButton';

const Header = () => {
  return (
    <header className="bg-yellow-500 text-dark-brown px-8 py-4 shadow-md flex justify-between items-center">
      <a href="/" className="text-2xl font-bold no-underline text-dark-brown">FlatFind</a>
      <div className="flex items-center gap-6">
        <a href="#" 
           className="text-dark-brown font-semibold hover:underline">About Us</a>
        <ProfileDropdownButton />
      </div>
    </header>
  );
};

export default Header;
