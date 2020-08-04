import React from 'react';
import LandingCard from './LandingCard';
import RecipesCard from './RecipesCard';
import AuthService from '../../services/AuthService';

var IsAuthenticated = AuthService.GetAuthStatus();

const HomeCard = () => {
  if (IsAuthenticated) {
    return <RecipesCard />;
  }

  return <LandingCard />;
};

export default HomeCard;
