import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input, Message, Dimmer, Loader } from "semantic-ui-react";

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [messageContent, setMessageContent] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const [showError, setShowError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
    setShowError(false);
    setFirstNameError(false);
  };

  const handleFirstNameError = () => {
    if (!firstName) {
      setFirstNameError(true);

      return;
    } else {
      setFirstNameError(false);
    }
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
    setShowError(false);
    setLastNameError(false);
  };

  const handleLastNameError = () => {
    if (!lastName) {
      setLastNameError(true);

      return;
    } else {
      setLastNameError(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setShowError(false);
    setEmailError(false);
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
    setShowError(false);
    setPasswordError(false);
  };

  const handlePasswordError = () => {
    if (!password) {
      setPasswordError(true);

      return;
    } else {
      setPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    handleFirstNameError();
    handleLastNameError();
    handleEmailError();
    handlePasswordError();

    if (!firstName || !lastName || !email || !password) {
      setShowError(true);

      return;
    }

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);

    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <h1 className="appTitle">tabletune</h1>

        <div className="register">
          <div className="register-form">
            <div className="logo"></div>
            <div className="register-form_title">
              <h2>Create a new account</h2>
              <p>It's qiuck and easy.</p>
            </div>

            {loading && <Message success header="Account successfully created!" />}

            <Divider />
            <Form onSubmit={handleSubmit}>
              {loading && (
                <Dimmer active inverted>
                  <Loader inverted>Redirecting to login page...</Loader>
                </Dimmer>
              )}

              <Form.Group widths={2}>
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  placeholder="First name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  error={firstNameError && { content: "Please enter first name.", pointing: "above" }}
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  error={lastNameError && { content: "Please enter last name.", pointing: "above" }}
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                type="email"
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
                error={passwordError && { content: "Please enter a password.", pointing: "above" }}
              />
              <Button className="submitButton" type="submit">
                Sign Up
              </Button>
              <Link to="/login">Already have an account?</Link>
            </Form>
            <Message
              onDismiss={() => {
                setShowError(false);
              }}
              negative
              hidden={!showError}
            >
              Please complete all fields before submitting the form.
            </Message>
          </div>
        </div>
      </div>
    </>
  );
}
