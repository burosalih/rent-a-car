import { useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Contact() {
  const firstName = useRef();
  const lastName = useRef();
  const email = useRef();
  const phoneNumber = useRef();
  const message = useRef();

  function handleSubmit(e) {
    e.preventDefault();

    const formData = {
      firstName: firstName.current.value,
      lastName: lastName.current.value,
      email: email.current.value,
      phoneNumber: phoneNumber.current.value,
      message: message.current.value,
    };

    axios
      .post("http://your-api-url/contact", formData)
      .then((response) => {
        console.log(response);
        alert("Your message has been sent successfully!");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "An error occurred while sending your message. Please try again later."
        );
      });
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Kontaktirajte nas
        </h2>
      </div>
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-700"
              >
                Ime
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                ref={firstName}
                required
                className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-700"
              >
                Prezime
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                ref={lastName}
                required
                className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email adresa
              </label>
              <input
                type="email"
                id="email"
                name="email"
                ref={email}
                required
                className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border"
              />
            </div>
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Broj telefona
              </label>
              <input
                type="tel"
                id="phoneNumber"
                name="phoneNumber"
                ref={phoneNumber}
                required
                className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Poruka
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                ref={message}
                required
                className="mt-1 p-2 border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border"
              />
            </div>
            <div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-orange-500 hover:scale-105 duration-300 to-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
              >
                Pošalji
              </button>
            </div>
          </form>
        </div>
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Pronađite nas
        </h2>
      <div className="w-full flex justify-center mt-8">
        <div className="border border-gray-300 rounded-xl w-[500px]">
          <iframe
            title="Google Maps"
            width="100%"
            height="500"
            frameborder="0"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Lond%C5%BEa%2092+(CCRent)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          >
            <a href="https://www.gps.ie/">gps devices</a>
          </iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
