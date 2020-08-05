import React from 'react';
import axios from 'axios';
import authHeader from './auth-header';

const getRecipeList = () => {
  return axios.get('/api/recipe', { headers: authHeader() });
};

export default {
  getRecipeList,
};
