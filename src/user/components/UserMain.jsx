import React from "react";
import UserHeader from "../pages/UserHeader";
import { Route, Routes } from "react-router-dom";
import UserHome from "./UserHome";
import UserAbout from "./UserAbout";
import UserAddGrie from "./UserAddGrie";
import UserFooter from "../pages/UserFooter";
import Auth from "../../Auth";
import Login from "../../Auth/Login";
import Register from "../../Auth/Register";

function UserMain() {
  return (
    <>
{/* user main page  */}
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/uaboutus" element={<UserAbout />} />
        <Route path="/uaddgrievance" element={<UserAddGrie />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

      </Routes>
      <UserFooter />

    </>
  );
}

export default UserMain;
