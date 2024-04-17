const Button = ({ children, onClick, variant = 'primary', className = '' }) => {
  const baseStyle = "text-purple-800 font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out focus:outline-none";
  const variantStyles = {
    primary: "bg-yellow-400 hover:bg-purple-800 hover:text-yellow-400",
  };

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyles[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
