import React from 'react';
import axios from 'axios';
import authHeader from './auth-header';

const API_URL =
  window.location.protocol +
  '//' +
  window.location.hostname +
  ':' +
  window.location.port;

const getRecipeList = () => {
  return axios.get(API_URL + '/api/recipe', { headers: authHeader() });
};

export default {
  getRecipeList,
};
