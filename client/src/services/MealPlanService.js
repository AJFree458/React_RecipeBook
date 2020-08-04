import axios from 'axios';

const API_URL = '/api/mealplan';

const CreateMealPlan = (author, planweek, week) => {
  console.log('----Recipe Service Axios Call----');

  return axios.post('/api/mealplan', {
    author,
    planweek,
    week,
  });
};

const getAllMealPlan = () => {
  return axios.get('/api/mealplan');
};

const getMealPlanById = (id) => {
  return axios.get('/api/mealplan/' + id);
};

export default {
  CreateMealPlan,
  getAllMealPlan,
  getMealPlanById,
};
