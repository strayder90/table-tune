import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input, Icon, Message } from "semantic-ui-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    navigate("/");
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowError(false);
    setEmailError(false);
  };

  const handleEmailError = () => {
    if (!email) {
      setEmailError(true);
    } else {
      setEmailError(false);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setShowError(false);
    setPasswordError(false);
  };

  const handlePasswordError = () => {
    if (!password) {
      setPasswordError(true);
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleEmailError();
    handlePasswordError();

    if (!email || !password) {
      setShowError(true);

      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    navigate("/main");
  };

  const handleClearEmail = () => {
    setEmail("");
  };

  const handleClearPassword = () => {
    setPassword("");
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
                icon={email ? <Icon name="close" link onClick={handleClearEmail} /> : null}
                type="text"
                placeholder="Email"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
              />
              <Form.Field
                id="form-input-control-password"
                control={Input}
                icon={password ? <Icon name="close" link onClick={handleClearPassword} /> : null}
                type="password"
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
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
                setShowError(false);
                setEmailError(false);
                setPasswordError(false);
              }}
              negative
              hidden={!showError}
            >
              Please complete all fields before you can proceed.
            </Message>
          </div>
        </div>
      </div>
    </>
  );
}
