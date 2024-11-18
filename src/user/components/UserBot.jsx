import React, { useState } from "react";
import bot from "../UserImages/bot.jpg";

function UserBot() {

  const [isModalOpen, setModalOpen] = useState(false);
  const [response, setResponse] = useState("");
    const handleBot = (option)=>{
      const answers = {
        option1: "Submitting a grievance is easy! Just fill out the form on the 'Add Grievance' page.",
        option2: "After submission, You will get an email from our superhero and  will review your complaint and take action promptly.",
      };
      setResponse(answers[option]);
    };
  
  return (
    <>
      <div className="flex flex-col items-end me-5 ">
        <span className="text-red-800">"Need Assistance ?"</span>
        <button className="me-10" onClick={() => setModalOpen(true)}>
          <img src={bot} className="w-12" alt="Bot Image" />
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white w-11/12 md:w-1/3 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-4">How can we help?</h2>
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => handleBot("option1")}
                className="bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition"
              >
                How can I submit a grievance?
              </button>
              <button
                onClick={() => handleBot("option2")}
                className="bg-gray-200 text-black py-2 px-4 rounded-lg hover:bg-gray-300 transition"
              >
                What happens after I submit a grievance?
              </button>
            </div>
            {/* Response Area */}
            {response && (
              <div className="mt-6 bg-gray-100 p-4 rounded-lg">
                <p className="text-gray-700">{response}</p>
              </div>
            )} 
            {/* Close Button */}
            <button
              onClick={() => setModalOpen(false)}
              className="mt-6 w-full bg-red-800 text-white py-2 rounded-lg hover:bg-red-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    
    </>
  );
}

export default UserBot;
