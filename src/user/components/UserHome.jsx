import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import UserAbout from "./UserAbout";
import UserBot from "./UserBot";

function UserHome() {
  return (
    <>
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center mt-10 mb-20 px-10">
        <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <div className="md:ml-8 lg:ml-16">
            <h5 className="text-4xl md:text-3xl font-bold text-red-700">
              WHERE EVERYDAY HEROES MEET EVERYDAY NEEDS!
            </h5>
            <p className="mt-4 text-gray-700">
              "HeroHub connects you directly to a hero dedicated to making a
              difference. Submit your grievances, share your stories, and let
              our superhero stand up for you. Together, we can bring justice
              closer to home, one concern at a time."
            </p>

            <div className="mt-5 flex justify-center md:justify-start">
              <button className="px-4 py-2 bg-red-700 rounded-md text-white font-bold transition-transform duration-500 hover:scale-105">
                SEND A GRIEVANCE NOW
                <FontAwesomeIcon className="ml-2" icon={faArrowRight} />
              </button>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <img
            src="https://img.freepik.com/premium-vector/silhouette-hero-black-color-only-full-body_925376-75911.jpg"
            alt="Hero Silhouette"
            className="max-w-full h-auto ms-10 transition-transform duration-500 hover:scale-105"
          />
          
        </div>
      </div>
      

      <UserAbout />
    </>
  );
}

export default UserHome;
