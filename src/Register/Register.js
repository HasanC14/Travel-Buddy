import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";

const Register = () => {
  const provider = new GoogleAuthProvider();
  const { LoginWithGoogle, Register } = useContext(AuthContext);
  const [error, setError] = useState([]);

  const HandleForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const Username = form.Username.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    Register(email, password)
      .then(() => {
        alert("Register Successful");
        form.reset();
      })
      .catch((error) => {
        setError(error);
      });
  };
  const HandleGoogle = () => {
    LoginWithGoogle(provider)
      .then(() => {
        alert("Login Successful");
      })
      .catch((error) => {
        setError(error);
      });
  };
  return (
    <div className="flex justify-center">
      <div className="w-1/2">
        <form
          className=" shadow-md rounded px-8 pt-6 pb-8 mb-4"
          onSubmit={HandleForm}
        >
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Username
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="Username"
              type="text"
              name="Username"
              placeholder="Hasan Chowdhury"
            />
          </div>

          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              photoURL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="photoURL"
              type="text"
              name="photoURL"
            />
          </div>
          <div className="mb-4">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name="email"
              placeholder="hasan@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label className="block text-white-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name="password"
              placeholder="******************"
            />
            <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text">Accept Terms & Condition</span>
                <input
                  type="checkbox"
                  className="checkbox"
                  //onClick={HandleTC}
                />
              </label>
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              //disabled={!TC}
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 gap-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={HandleGoogle}
          >
            Login with Google
          </button>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Login with Facebook
          </button>
        </div>
        <p className="text-red-700 text-xl">{error}</p>
      </div>
    </div>
  );
};

export default Register;
