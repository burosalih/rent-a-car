import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const firstname = useRef();
  const lastname = useRef();
  const telephone = useRef();
  const email = useRef();
  const password = useRef();
  const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  function createUserAcccount(e) {
    e.preventDefault();

    if (!password.current.value.match(passwordRegEx))
      return alert("Šifra treba imati minimalno 8 karaktera, najmanje 1 slovo i 1 broj.");

    axios.get("http://localhost:8000/users")
      .then((response) => {
        const users = response.data;
        const newId = (users.length > 0 ? Math.max(...users.map(user => parseInt(user.id))) + 1 : 1).toString();

        return axios.post("http://localhost:8000/users", {
          id: newId,
          ime: firstname.current.value,
          prezime: lastname.current.value,
          broj: telephone.current.value,
          email: email.current.value,
          password: password.current.value,
          role: "user"
        });
      })
      .then(() => {
        alert("Nalog je uspješno kreiran.");
        window.location.href = "/login";
      })
      .catch((error) => alert(error.response.data.message));
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Registracija</h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={createUserAcccount}>
            <div>
              <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">Ime</label>
              <div className="mt-1">
                <input id="firstname" name="firstname" type="text" required ref={firstname}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">Prezime</label>
              <div className="mt-1">
                <input id="lastname" name="lastname" type="text" required ref={lastname}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="telephone" className="block text-sm font-medium text-gray-700">Broj telefona</label>
              <div className="mt-1">
                <input id="telephone" name="telephone" type="tel" required ref={telephone}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email adresa</label>
              <div className="mt-1">
                <input id="email" name="email" type="email" autoComplete="email" required ref={email}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Šifra</label>
              <div className="mt-1">
                <input id="password" name="password" type="password" autoComplete="current-password" required ref={password}
                  className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-orange-500 focus:border-orange-500 sm:text-sm"
                />
              </div>
            </div>
            <div>
              <button type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 hover:scale-105 duration-300 to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Registruj se
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
