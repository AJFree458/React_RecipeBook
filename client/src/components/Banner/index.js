import React from 'react';
import LandingBanner from '../Banner/LandingBanner';
import MemberBanner from '../Banner/MemberBanner';
import AuthService from '../../services/AuthService';
import './style.css';

var IsAuthenticated = AuthService.GetAuthStatus();

function Banner() {
  if (IsAuthenticated) {
    return <MemberBanner />;
  }

  return <LandingBanner />;
}

export default Banner;
