import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [error, setError] = useState("");
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
  
    axios
      .get(`http://localhost:8000/users?email=${emailRef.current.value}`)
      .then((response) => {
        const user = response.data[0];
  
        if (!user) {
          setError("Korisnik nije pronađen.");
          return;
        }
  
        if (passwordRef.current.value === user.password) {
          localStorage.setItem("user", JSON.stringify(user));
          if (user.role === "admin") {
            navigate("/dashboard");
          } else {
            navigate("/profile");
          }
          window.location.reload()
            
        } else {
          setError("Pogrešna šifra. Pokušajte ponovo.");
        }
      })
      .catch((error) => {
        console.log(error);
        setError("Error. Molimo pokušajte ponovo.");
      });
  }
  

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Ukucajte lične podatke
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleLogin}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email adresa</label>
              <div className="mt-1">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  ref={emailRef}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Šifra</label>
              <div className="mt-1">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  ref={passwordRef}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <a href="/forgot-password" className="font-medium text-orange-600 hover:text-orange-500">
                  Zaboravili ste šifru?
                </a>
              </div>
            </div>

            {error && (
              <div className="rounded-md bg-red-50 p-4 mt-4">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M10 3a1 1 0 00-.993.883L9 4v6c0 .567.437 1 1 1 .567 0 1-.433 1-1V4a1 1 0 00-.883-.993L10 3zM8.293 3.707a1 1 0 00-1.414 1.414L7.586 6.5 4.879 9.207a1 1 0 101.414 1.414L9 7.914l2.707 2.707a1 1 0 101.414-1.414L10.414 6.5 12.121 4.793a1 1 0 00-1.414-1.414L9 5.086 8.293 3.707z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div className="ml-3">
                    <h3 className="text-sm font-medium text-red-800">{error}</h3>
                  </div>
                </div>
              </div>
            )}

            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-orange-600 hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Prijavite se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
