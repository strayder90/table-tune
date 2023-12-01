import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input, Message, Dimmer, Loader } from "semantic-ui-react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registered, setRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !lastName || !email || !password) {
      setRegistered(true);

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
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  placeholder="Last name"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Form.Group>
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
                Sign Up
              </Button>
              <Link to="/login">Already have an account?</Link>
            </Form>
            <Message
              onDismiss={() => {
                setRegistered(false);
              }}
              negative
              hidden={!registered}
            >
              Please complete all fields before submitting the form.
            </Message>
          </div>
        </div>
      </div>
    </>
  );
}
