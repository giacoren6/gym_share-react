import React, { useContext, useState } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Image from "react-bootstrap/Image";
import Container from "react-bootstrap/Container";

import { Link, useHistory } from "react-router-dom";

import styles from "../../styles/SignUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import { SetCurrentUserContext } from "../../App";
import signup from "../../assets/signup.png"; // Import the signup image

function SignInForm() {
  const setCurrentUser = useContext(SetCurrentUserContext);

  const [signInData, setSignInData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = signInData;

  const [errors, setErrors] = useState({});

  const history = useHistory();
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await axios.post("/dj-rest-auth/login/", signInData);
      setCurrentUser(data.user);
      history.push("/");
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign in</h1>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="username">
              <Form.Label>Username</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter username"
                name="username"
                value={username}
                onChange={(e) => setSignInData({ ...signInData, [e.target.name]: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                name="password"
                value={password}
                onChange={(e) => setSignInData({ ...signInData, [e.target.name]: e.target.value })}
              />
            </Form.Group>
            {errors.non_field_errors?.map((message, idx) => (
              <Alert key={idx} variant="danger">
                {message}
              </Alert>
            ))}
            <Button variant="primary" type="submit" className={btnStyles.Button}>
              Sign in
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signup">
            Don't have an account? <span>Sign up</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignInCol}`}
      >
           <Image className={`${appStyles.FillerImage}`} src={signup} />
      </Col>
    </Row>
  );
}

export default SignInForm;


