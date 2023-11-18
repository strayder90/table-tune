import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider } from "semantic-ui-react";

export default function Login() {
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/");
  };

  const handleClick = () => {
    navigate("/main");
  };

  return (
    <>
      <div className="container">
        <div className="register">
          <div className="register-form">
            <div className="register-form_title">
              <h2>Welcome back</h2>
              <p>Ready to make your reservations?</p>
            </div>
            <Divider />
            <Form onSubmit={handleClick}>
              <Form.Field>
                <input type="email" placeholder="Email" required />
              </Form.Field>
              <Form.Field>
                <input type="password" placeholder="Password" required />
              </Form.Field>
              <Button className="submitButton" type="submit">
                Log in
              </Button>
              <Link to="#">Forgotten password?</Link>
              <Divider horizontal>Or</Divider>
              <Button className="createAccountButton" onClick={handleCreateAccount}>
                Create new account
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
