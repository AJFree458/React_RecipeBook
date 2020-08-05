import axios from 'axios';

const CreateMealPlan = (author, planweek, week) => {
  console.log('----Meal sPlan Service Axios Call----');

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
