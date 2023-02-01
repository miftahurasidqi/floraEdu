function Login() {
  return (
    <main className="flex h-screen justify-center items-center p-3 bg-teal-200">
      <form action="">
        <div className="bg-white w-80 p-7 shadow-md shadow-gray-300 rounded-md">
          <h1 className="text-gray-800 text-2xl text-center mb-8 font-semibold">
            Flora<span className="text-teal-500">Edu</span>
          </h1>

          <label className="text-gray-800" for="email">
            Email
          </label>
          <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-4" type="text" placeholder="Masukan Email" id="email" />

          <label className="text-gray-800" for="Password">
            Password
          </label>
          <input className="w-full p-2 bg-gray-100 text-gray-700 rounded-md outline-teal-700 mb-5" type="password" placeholder="Masukan Password" id="Password" />

          <div className="flex justify-center bg-teal-400 hover:bg-teal-600 text-gray-700 hover:text-gray-200 rounded-md">
            <button className="flex gap-1 py-2">
              <span className="text-md">Login</span>
            </button>
          </div>
          <p className="text-teal-800 mt-2">Lupa Password?</p>
        </div>
      </form>
    </main>
  );
}

export default Login;
