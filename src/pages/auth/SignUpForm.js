import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import signup from "../../assets/signup.png";

import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";
import { Form, Button, Image, Col, Row, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    emailAddress: "",
    password: "",
  });
  const { emailAddress, password } = signUpData;

  const [error, setError] = useState({});

  const history = useHistory();

  const handleChange = (e) => {
    setSignUpData({
      ...signUpData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      history.push("/signin");
    } catch (error) {
      console.log(error);
      setError(error.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>
          <Form onSubmit={handleSubmit}>
            <FormFloatingCustom
              emailAddress={emailAddress}
              password={password}
              handleChange={handleChange}
              error={error}
            />
            <Button variant="primary" type="submit" className={btnStyles.Button}>
              Sign up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image className={`${appStyles.FillerImage}`} src={signup} />
      </Col>
    </Row>
  );
};

function FormFloatingCustom({ emailAddress, password, handleChange, error }) {
  return (
    <>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
          name="emailAddress"
          value={emailAddress}
          onChange={handleChange}
        />
        <label htmlFor="floatingInputCustom">Email address</label>
        {error.emailAddress?.map((message, index) => (
          <Alert key={index} variant="danger">
            {message}
          </Alert>
        ))}
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
        {error.password?.map((message, index) => (
          <Alert key={index} variant="danger">
            {message}
          </Alert>
        ))}
      </Form.Floating>
    </>
  );
}

export default SignUpForm;