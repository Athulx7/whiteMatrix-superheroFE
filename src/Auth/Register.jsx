import React, { useState } from 'react'
import Loginimage from "../assets/loginimage.png";
import { Link } from 'react-router-dom';

function Register() {

    const [registerData,setRegisterData] = useState({

        name:'',
        email:'',
        password:''
    })

    const [error,setError] = useState({})

    const handleOnchange = (e)=>{
        setRegisterData({...registerData,[e.target.name]:e.target.value})
    }

    const validation = ()=>{
        const newError = {}

        if(!registerData.name){
            newError.name = "User name is required"     
        }
        else if(!/^[a-zA-Z\s]+$/.test(registerData.name)){
            newError.name = "User name can only contain letters and spaces"

        }

        if(!registerData.email){
            newError.email = "Email is requierd"
        }
        else if (!/\S+@\S+\.\S+/.test(registerData.email)){
            newError.email = "Enter a valid email id"
        }

        if(!registerData.password){
            newError.password = "Password is required"
        }
        else if(registerData.password.length < 8){
            newError.password = "please enter a 8 characters"

        }


        setError(newError)
        return Object.keys(newError).length===0
    }


    const handleRegister =(e)=>{
        e.preventDefault()
        if(validation()){
        console.log(registerData)


        }
    }

  return (

    <>
    <div className="container mx-auto flex flex-col justify-center items-center mt-10 px-10">
    <h5 className="text-2xl font-bold text-red-700">WELCOME USER</h5>
    <hr className="w-1/2 mt-5" />
  </div>

  <div className="container mx-auto flex flex-col md:flex-row justify-center items-center px-10 md:px-32">


  <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left mb-32">
      <div className="md:ml-8 lg:ml-16 w-full">
        <div className="space-y-6 bg-white shadow-md rounded-lg p-8 w-full max-w-lg">

        <div>
            <label className="block font-semibold mb-2">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your name"
              onChange={handleOnchange}
              value={registerData.name}
            />
             {error.name && (
              <span className="text-red-500">{error.name}</span>
            )}
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
              onChange={handleOnchange}
              value={registerData.email}

            />
             {error.email && (
              <span className="text-red-500">{error.email}</span>
            )}
          </div>

          <div>
            <label className="block font-semibold mb-2">Password</label>
            <input
              type="password"
              name="password"
              className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              placeholder="Enter your password"
              onChange={handleOnchange}
              value={registerData.password}
            />
             {error.password && (
              <span className="text-red-500">{error.password}</span>
            )}
          </div>

          <div className="flex justify-center">
            <button
             onClick={handleRegister}
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
        </div>
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
