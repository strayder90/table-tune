import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input, Message, Icon } from "semantic-ui-react";

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

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

  const handleClearFirstName = () => {
    setFirstName("");
  };

  const handleClearLastName = () => {
    setLastName("");
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
        <h1 className="appTitle">tabletune</h1>

        <div className="register">
          <div className="register-form">
            <div className="logo"></div>
            <div className="register-form_title">
              <h2>Create a new account</h2>
              <p>It's qiuck and easy.</p>
            </div>

            <Divider />
            <Form onSubmit={handleSubmit} loading={loading}>
              <Form.Group widths={2}>
                <Form.Field
                  id="form-input-control-first-name"
                  control={Input}
                  icon={firstName ? <Icon name="close" link onClick={handleClearFirstName} /> : null}
                  placeholder="First name"
                  value={firstName}
                  onChange={handleFirstNameChange}
                  error={firstNameError}
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  icon={lastName ? <Icon name="close" link onClick={handleClearLastName} /> : null}
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                  error={lastNameError}
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                icon={email ? <Icon name="close" link onClick={handleClearEmail} /> : null}
                type="email"
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
                Sign Up
              </Button>
              <Link to="/login">Already have an account?</Link>
            </Form>
            <Message
              onDismiss={() => {
                setShowError(false);
                setFirstNameError(false);
                setLastNameError(false);
                setEmailError(false);
                setPasswordError(false);
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
