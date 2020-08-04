import React from 'react';
import LandingNav from './LandingNav';
import MemberNav from './MemberNav';
import AuthService from '../../services/AuthService';

var IsAuthenticated = AuthService.GetAuthStatus();

const Navigation = () => {
  if (IsAuthenticated) {
    return <MemberNav />;
  }

  return <LandingNav />;
};

export default Navigation;
