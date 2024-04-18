function LoginForm() {
  return (
    <form className="w-full max-w-sm mx-auto p-6 bg-white rounded shadow-md">
      <div className="mb-4">
        <label className="block text-dark-brown text-sm font-bold mb-2" htmlFor="email">
          Correo Electrónico
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-yellow-400 focus:border-yellow-400" id="email" type="email" placeholder="Correo Electrónico" />
      </div>
      <div className="mb-6">
        <label className="block text-dark-brown text-sm font-bold mb-2" htmlFor="password">
          Contraseña
        </label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:ring-yellow-400 focus:border-yellow-400" id="password" type="password" placeholder="**********" />
      </div>
      <div className="flex items-center justify-between">
        <button className="bg-yellow-400 hover:bg-yellow-500 text-dark-brown font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Iniciar Sesión
        </button>
      </div>
    </form>
  );
}

export default LoginForm;
