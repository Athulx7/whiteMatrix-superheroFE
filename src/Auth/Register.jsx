import React from 'react'
import Loginimage from "../assets/loginimage.png";
import { Link } from 'react-router-dom';

function Register() {
  return (

    <>
    <div className="container mx-auto flex flex-col justify-center items-center mt-10 px-10">
    <h5 className="text-2xl font-bold text-red-700">WELCOME USER</h5>
    <hr className="w-1/2 mt-5" />
  </div>

  <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-10 md:px-32">


  <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-32">
      <div className="md:ml-8 lg:ml-16 w-full">
        <form className="space-y-6 bg-white shadow-md rounded-lg p-8 w-full max-w-lg">

        <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your name"
            />
          </div>


          <div>
            <label className="block font-semibold mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your password"
            />
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-full bg-black text-white font-bold p-2 rounded transition-transform duration-500 hover:scale-105"
            >
              REGISTER
            </button>
          </div>

          <div className="text-center">
            <p>
              ALready have an Account? Please{" "}
              <Link
                to={"/login"}
                className="text-blue-500 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>


    <div className="md:w-1/2  justify-center md:mt-0 hidden md:block">
      <img
        src={Loginimage}
        alt="Hero Silhouette"
        className="max-w-full h-auto ms-10 transition-transform duration-500 hover:scale-105"
      />
    </div>

   
  </div>
  </>
  )
}

export default Register
