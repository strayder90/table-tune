import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function ReservationsList() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <>
      <h1>This is reservations list page.</h1>
      <Button color="teal" onClick={handleClick}>
        Go back
      </Button>
    </>
  );
}
