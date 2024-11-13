import {
  faFacebook,
  faGithub,
  faInstagram,
  faSquareFacebook,
  faSquareInstagram,
  faSquareXTwitter,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

function UserFooter() {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-start p-5 mt-5 bg-black text-gray-500">
        <div className="mb-8 md:mb-0 max-w-[300px] text-center md:text-left">
          <Link to="/" className="text-white no-underline">
            <h5 className="text-lg font-semibold md:text-left text-left">
              HERO HUB
            </h5>
          </Link>
          <p className="mt-3 text-left md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
            praesentium sapiente nesciunt soluta adipisci, vel quas sint, esse
            ex suscipit cum assumenda dicta voluptatum provident placeat eum?
            Inventore, autem maxime.
          </p>
        </div>

        <div className="mb-8 md:mb-0 md:ml-5 max-w-[400px] text-center md:text-left">
          <h5 className="text-lg text-white font-semibold">Links</h5>
          <div className="flex flex-col mt-3 space-y-2">
            <Link
              to="/home"
              className="hover:text-white transition-colors duration-300"
            >
              Home
            </Link>
            <Link
              to="/aboutus"
              className="hover:text-white transition-colors duration-300"
            >
              About Us
            </Link>
            <Link
              to="/showmorewash"
              className="hover:text-white transition-colors duration-300"
            >
              Add Grievance
            </Link>
          </div>
        </div>

        <div className="mb-8 md:mb-0 md:ml-4 max-w-[400px] text-center md:text-left">
          <h5 className="text-lg text-white font-semibold">Send Message</h5>
          <div className="flex flex-col mt-3 space-y-2">
            <input
              type="text"
              className="border border-gray-300 p-2 rounded focus:outline-none focus:border-red-700"
              placeholder="Text a message"
            />
            <button className="bg-red-700 text-white font-bold p-2 rounded hover:bg-red-600 transition-colors duration-300">
              SEND
            </button>
          </div>
        </div>

        <div className="md:ml-5 max-w-[400px] text-center md:text-left">
          <h5 className="text-lg text-white font-semibold">Social</h5>
          <div className="flex justify-center md:justify-start mt-3 space-x-3">
            <Link
              to="/"
              className="text-white transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareFacebook} size="2x" />
            </Link>
            <Link
              to="/"
              className="text-white transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareInstagram} size="2x" />
            </Link>
            <Link
              to="/"
              className="text-white transition-transform duration-300 hover:scale-105"
            >
              <FontAwesomeIcon icon={faSquareXTwitter} size="2x" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserFooter;
