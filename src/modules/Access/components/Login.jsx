import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input, Message } from "semantic-ui-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setpasswordError] = useState(false);

  const [messageContent, setMessageContent] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleEmailError = () => {
    if (!email) {
      setEmailError(true);
      setMessageContent("Please enter a valid email address.");
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handlePasswordError = () => {
    if (!password) {
      setpasswordError(true);
      setMessageContent("Please enter password.");
    } else {
      setpasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleEmailError();
    handlePasswordError();

    if (!email || !password) {
      setRegistered(true);

      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    navigate("/main");
  };

  return (
    <>
      <div className="container">
        <div className="register">
          <div className="register-form">
            <div className="register-form_title">
              <div className="logo"></div>
              <h2>Log into Table Tune </h2>
              <p>Ready to make your reservations?</p>
            </div>
            <Divider />
            <Form onSubmit={handleSubmit} loading={loading}>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                error={emailError && { content: `${messageContent}`, pointing: "above" }}
              />
              <Form.Field
                id="form-input-control-password"
                control={Input}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError && { content: `${messageContent}`, pointing: "above" }}
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
