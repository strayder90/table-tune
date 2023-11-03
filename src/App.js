import React from "react";
import { Routes, Route } from "react-router-dom";

import "./sass/style.css";
import "semantic-ui-css/semantic.min.css";

import { SignUp } from "./modules/Access/components/Signup.jsx";
import { Main } from "./modules/Main/components/Main.jsx";
import { ReservationsList } from "./modules/Reservations/components/List.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/list" element={<ReservationsList />} />
      </Routes>
    </>
  );
};
