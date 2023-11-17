import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Login() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <>
      <h1>This is Log in page.</h1>
      <Button color="purple" onClick={handleClick}>
        Log in
      </Button>
    </>
  );
}
