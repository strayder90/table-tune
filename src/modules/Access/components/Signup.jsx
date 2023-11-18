import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider, Input } from "semantic-ui-react";

export default function SignUp() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/main");
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
            <Form onSubmit={handleClick}>
              <Form.Group widths={2}>
                <Form.Field id="form-input-control-first-name" control={Input} placeholder="First name" required />
                <Form.Field id="form-input-control-last-name" control={Input} placeholder="Last name" required />
              </Form.Group>
              <Form.Field id="form-input-control-email" control={Input} type="email" placeholder="Email" required />
              <Form.Field
                id="form-input-control-password"
                control={Input}
                type="password"
                placeholder="Password"
                required
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
