import React from 'react';
import Navigation from '../../components/Navigation';
import Jumbotron from '../../components/Banner';
import HomeCard from '../../components/HomeCard';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>RecipeBook</title>
      </Helmet>
      <nav>
        <Navigation />
      </nav>
      <Jumbotron />
      <HomeCard />
    </div>
  );
};

export default Home;
