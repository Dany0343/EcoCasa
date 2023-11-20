function LoginPage() {
  return (
    // Contenedor principal
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      {/* Tarjeta de inicio de sesión */}
      <div className="bg-white shadow-md rounded-lg max-w-md w-full mx-auto p-8">
        {/* Logo y título */}
        <div className="flex justify-center mb-8">
          <img className="h-12 w-auto" src="path_to_your_logo.png" alt="Logo" />
        </div>

        {/* Formulario de inicio de sesión */}
        <form>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Tu usuario"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Iniciar sesión
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
