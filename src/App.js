import React from "react";
import { Routes, Route } from "react-router-dom";

import "./sass/style.css";
import "semantic-ui-css/semantic.min.css";

import { SignUp } from "./modules/Access/components/Signup.jsx";
import { Main } from "./modules/Main/components/Main.jsx";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
      </Routes>
    </>
  );
};
