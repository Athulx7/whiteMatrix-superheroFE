import React from "react";

import UserMain from "./user/components/UserMain";
import { Route, Routes } from "react-router-dom";
import Auth from "./Auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      {/* user dashborad */}

      <UserMain />
      <ToastContainer />


      
    </>
  );
}

export default App;
