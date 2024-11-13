import React from "react";
import { Route, Routes } from "react-router-dom";

import UserHeader from "./user/pages/UserHeader";
import UserFooter from "./user/pages/UserFooter";
import UserHome from "./user/components/UserHome";
import UserAbout from "./user/components/UserAbout";

function App() {
  return (
    <>
      {/* user dashborad */}
      <UserHeader />
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/uaboutus" element={<UserAbout />} />
      </Routes>
      <UserFooter />
    </>
  );
}

export default App;
