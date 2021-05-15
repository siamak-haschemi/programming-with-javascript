export const loginService = (credentials, thunkAPI) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.btoa(
          credentials.username + ':' + credentials.password)
    },
    body: JSON.stringify(credentials)
  };

  return fetch(`http://localhost:4000/users/authenticate`, requestOptions)
  .then(response => {
    if (!response.ok) {
      return null;
    }
    return response.json()
  });
};

export const logoutService = (user, thunkAPI) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + user.token
    }
  };

  return fetch(`http://localhost:4000/users/logout`, requestOptions)
  .then(response => {
    if (!response.ok) {
      return null;
    }
    return response.json()
  });
};