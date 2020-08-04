import React from 'react';
import Navigation from '../../components/Navigation';
import LoginCard from '../../components/LoginCard';
import { Helmet } from 'react-helmet';

function Login() {
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      <Navigation />
      <LoginCard />
    </div>
  );
}

export default Login;
