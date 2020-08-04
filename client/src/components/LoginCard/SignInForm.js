import React, { useState, useRef } from 'react';
import { Button, FormGroup, Card, CardHeader, Row, CardBody } from 'reactstrap';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import CheckButton from 'react-validation/build/button';

import AuthService from '../../services/AuthService';

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

// SignIn Form
const LoginForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  // State Variables
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Username OnChange Event
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  // On Password Change Event
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage('');
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthenticateUser();
    } else {
      setLoading(false);
    }
  };

  function AuthenticateUser() {
    AuthService.SignIn(username, password).then(
      (response) => {
        console.log('Response: ' + response);
        if (response === false) {
          const resMessage = 'Sign In Failed.';
          setLoading(false);
          setMessage(resMessage);
        } else if (response.data.id) {
          window.location.href = '/SignIn';
        }
      },

      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setLoading(false);
        setMessage(resMessage);
      }
    );
  }

  return (
    <Row>
      <div className="col-md-4"></div>
      <div className="col-md-4">
        <Card className="mt-4 text-center">
          <CardHeader>
            <h1 className="h3 mb-3 mt-1 font-weight-normal">
              RecipeBook Sign In
            </h1>
          </CardHeader>
          <CardBody>
            <Form onSubmit={handleLogin} ref={form} style={{ padding: '10px' }}>
              <FormGroup>
                <label htmlFor="username">Username</label>
                <Input
                  type="text"
                  className="form-control"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required]}
                />
              </FormGroup>

              <FormGroup>
                <label htmlFor="password">Password</label>
                <Input
                  type="password"
                  className="form-control"
                  name="password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required]}
                />
              </FormGroup>

              <FormGroup>
                <Button
                  color="primary"
                  className="btn-block"
                  disabled={loading}
                >
                  {loading && (
                    <span className="spinner-border spinner-border-sm"></span>
                  )}
                  <span>Login</span>
                </Button>
              </FormGroup>

              {message && (
                <FormGroup>
                  <div className="alert alert-danger" role="alert">
                    {message}
                  </div>
                </FormGroup>
              )}
              <CheckButton style={{ display: 'none' }} ref={checkBtn} />
            </Form>
          </CardBody>
        </Card>
      </div>
    </Row>
  );
};
export default LoginForm;
