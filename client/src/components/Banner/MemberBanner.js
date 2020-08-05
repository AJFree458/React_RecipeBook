import React from 'react';
import { Jumbotron, Button } from 'reactstrap';
import './style.css';

function MemberBanner() {
  return (
    <div>
      <Jumbotron className="bannerimage">
        <h1 className="display-4">Welcome to Your RecipeBook!</h1>
        <h2>Save and view your recipes here.</h2>
        <hr className="my-4" />
        <Button color="primary" href="/newrecipe" role="button">
          New Recipe
        </Button>
        <Button color="primary" href="/mealplan" role="button">
          Meal Plan
        </Button>
      </Jumbotron>
    </div>
  );
}

export default MemberBanner;
