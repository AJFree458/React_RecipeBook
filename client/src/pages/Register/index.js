import React from 'react';
import Navigation from '../../components/Navigation';
import RegistrationForm from '../../components/RegistrationForm';
import { Helmet } from 'react-helmet';

function Login() {
  return (
    <div>
      <Helmet>
        <title>RecipeBook Register</title>
      </Helmet>
      <Navigation />
      <RegistrationForm />
    </div>
  );
}

export default Login;
