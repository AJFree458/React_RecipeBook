import axios from 'axios';

const API_URL = '/api/auth';

const register = (username, password) => {
  return axios.post(API_URL + '/signup', {
    username,
    password,
  });
};

const SignIn = (username, password) => {
  // Call Node to authenticate

  return axios

    .post(API_URL + '/signin', {
      username,
      password,
    })
    .then(
      (response) => {
        if (response.data.accessToken) {
          localStorage.setItem('user', JSON.stringify(response.data));
        }

        return response;
      },
      (error) => {
        // console.log(error)
        return false;
      }
    );
};

function SignOut() {
  localStorage.removeItem('user');
}

function getCurrentUser() {
  const token = JSON.parse(localStorage.getItem('user'));
  return token;
}

function IsLoggedIn() {
  if (localStorage.getItem('user') === null) {
    return false;
  }
  return true;
}

function GetAuthStatus() {
  const AuthStatus = JSON.parse(localStorage.getItem('user'));

  if (AuthStatus && AuthStatus.accessToken) {
    return true;
  } else {
    return false;
  }
}

export default {
  register,
  SignOut,
  SignIn,
  getCurrentUser,
  GetAuthStatus,
  IsLoggedIn,
};
