import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input, Message } from "semantic-ui-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setRegistered(true);

      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);

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
            <Form onSubmit={handleSubmit} loading={loading}>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                type="email"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Field
                id="form-input-control-password"
                control={Input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
              />
              <Button className="submitButton" type="submit">
                Log in
              </Button>
              <Link to="#">Forgotten password?</Link>
              <Divider horizontal>Or</Divider>
              <Button className="createAccountButton" onClick={handleCreateAccount}>
                Create new account
              </Button>
            </Form>
            <Message
              onDismiss={() => {
                setRegistered(false);
              }}
              negative
              hidden={!registered}
            >
              Please complete all fields before you can proceed.
            </Message>
          </div>
        </div>
      </div>
    </>
  );
}
