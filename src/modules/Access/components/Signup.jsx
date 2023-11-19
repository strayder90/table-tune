import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input } from "semantic-ui-react";

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);

    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <h1 className="appTitle">tabletune</h1>

        <div className="register">
          <div className="register-form">
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
                  placeholder="First name"
                  required
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                <Form.Field
                  id="form-input-control-last-name"
                  control={Input}
                  placeholder="Last name"
                  required
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </Form.Group>
              <Form.Field
                id="form-input-control-email"
                control={Input}
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={handleEmailChange}
              />
              <Form.Field
                id="form-input-control-password"
                control={Input}
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={handlePasswordChange}
              />
              <Button className="submitButton" type="submit">
                Sign Up
              </Button>
              <Link to="/login">Already have an account?</Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
