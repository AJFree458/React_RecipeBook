import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './style.css';

function LandingBanner() {
  return (
    <div>
      <Jumbotron className="bannerimage">
        <h1 className="display-4">Welcome to Your RecipeBook!</h1>
        <h2>Save and view your recipes here.</h2>
        <hr className="my-4" />
        <Button color="primary m-1" href="/register" role="button">
          Register
        </Button>
        <Button color="primary m-1" href="/login" role="button">
          Login
        </Button>
      </Jumbotron>
    </div>
  );
}

export default LandingBanner;
