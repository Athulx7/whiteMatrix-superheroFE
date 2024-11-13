import React from "react";
import bot from "../UserImages/bot.jpg";

function UserBot() {
    const handleBot = ()=>{
        alert('bot')
    }
  
  return (
    <>
      <div className="flex justify-end me-5 ">
        <button onClick={handleBot}>
          <img src={bot} className="w-12" alt="Bot Image" />
        </button>
      </div>
    </>
  );
}

export default UserBot;
