import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

export const SignUp = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <>
      <h1>This is Sign up page.</h1>
      <Button color="green" onClick={handleClick}>
        Sign up
      </Button>
    </>
  );
};
