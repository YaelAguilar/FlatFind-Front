const TextInput = ({ placeholder, onChange }) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline bg-gray-900 text-white placeholder-gray-500"
      />
    );
  };
  
  export default TextInput;
  