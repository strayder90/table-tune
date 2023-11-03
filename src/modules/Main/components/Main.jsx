import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

export const Main = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  const handleClickToReservations = () => {
    navigate("/list");
  };

  return (
    <>
      <h1>Welcome to the main page. You have successfully Signed up!</h1>
      <Button color="red" onClick={handleClick}>
        Sign out
      </Button>
      <br />
      <Button color="orange" onClick={handleClickToReservations}>
        View all reservations
      </Button>
    </>
  );
};
