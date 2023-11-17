import React, { useState } from "react";

import SignUp from "./Signup";
import Login from "./Login";

export default function Register() {
  const [registered, setRegistere] = useState(false);

  return <>{!registered ? <SignUp /> : <Login />}</>;
}
