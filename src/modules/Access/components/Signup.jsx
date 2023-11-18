import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button, Form, Divider } from "semantic-ui-react";

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
              <Form.Group>
                <Form.Field>
                  <input type="text" placeholder="First Name" required />
                </Form.Field>
                <Form.Field>
                  <input type="text" placeholder="Last Name" required />
                </Form.Field>
              </Form.Group>
              <Form.Field>
                <input type="email" placeholder="Email" required />
              </Form.Field>
              <Form.Field>
                <input type="password" placeholder="Password" required />
              </Form.Field>
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
