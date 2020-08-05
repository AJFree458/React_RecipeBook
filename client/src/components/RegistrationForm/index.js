import React, { useState, useRef } from 'react';
import {
  Col,
  Row,
  ButtonToggle,
  Label,
  Card,
  CardBody,
  CardHeader,
  FormGroup,
} from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';
import { isEmail } from 'validator';

import AuthService from '../../services/AuthService';

var myPassword;

const required = (value) => {
  myPassword = value;
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const vConfirmMatch = (value) => {
  if (myPassword !== value) {
    return (
      <div className="alert alert-danger" role="alert">
        Passwords must match.
      </div>
    );
  }
};

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const RegistrationForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setusername] = useState('');
  const [password, setPassword] = useState('');
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState('');
  const [confirmPw, setConfirmPw] = useState('');

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setusername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const onChangeConfirmPw = (e) => {
    const confirmPw = e.target.value;
    setConfirmPw(confirmPw);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage('');
    setSuccessful(false);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
          window.location.href = '/login';
        },

        (error) => {
          console.log('Registration Error:');
          console.log(error);
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          console.log(resMessage);
          setMessage(resMessage);
          setSuccessful(false);
        }
      );
    }
  };

  return (
    <div>
      <Row>
        <Col md={4}></Col>
        <Col md={4}>
          <Card>
            <CardHeader>
              <h1 className="h3 mb-3 mt-1 font-weight-normal">
                RecipeBook Register
              </h1>
              <h2 className="h4 my-1">Please Register Here</h2>
            </CardHeader>
            <CardBody>
              <Form onSubmit={handleRegister} ref={form}>
                {!successful && (
                  <div>
                    <Row>
                      <FormGroup>
                        <Label htmlFor="username">UserName </Label>
                        <Input
                          type="text"
                          className="form-control"
                          name="username"
                          value={username}
                          onChange={onChangeUsername}
                          validations={[required, validEmail]}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <Label htmlFor="password">Password</Label>
                        <Input
                          type="password"
                          className="form-control"
                          name="password"
                          value={password}
                          onChange={onChangePassword}
                          validations={[required, vpassword]}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <FormGroup>
                        <Label htmlFor="confirmPw">Password</Label>
                        <Input
                          type="password"
                          className="form-control"
                          name="confirmPw"
                          value={confirmPw}
                          onChange={onChangeConfirmPw}
                          validations={[vConfirmMatch]}
                        />
                      </FormGroup>
                    </Row>
                    <Row>
                      <br />
                      <Col md={{ size: 10, offset: 1 }}>
                        <br />
                        <ButtonToggle
                          type="submit"
                          color="success"
                          ref={checkBtn}
                        >
                          {' '}
                          Sign Up{' '}
                        </ButtonToggle>
                      </Col>
                    </Row>
                  </div>
                )}
                {message && (
                  <FormGroup>
                    <div>{message.message}</div>
                    <div
                      className={
                        successful
                          ? 'alert alert-success'
                          : 'alert alert-danger'
                      }
                      role="alert"
                    >
                      {message.message}
                    </div>
                  </FormGroup>
                )}

                <CheckButton style={{ display: 'none' }} ref={checkBtn} />
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default RegistrationForm;
