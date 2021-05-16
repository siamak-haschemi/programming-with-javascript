export const loginService = (credentials, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.btoa(
          credentials.username + ':' + credentials.password)
    },
    body: JSON.stringify(credentials)
  };

  return fetch(`http://localhost:4000/user/authenticate`, requestOptions)
  .then(response => {
    if (!response.ok) {
      return rejectWithValue(response.data);
    }
    return response.json()
  });
};

export const logoutService = (token, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  return fetch(`http://localhost:4000/user/logout`, requestOptions)
  .then(response => {
    if (!response.ok) {
      return rejectWithValue(response.data);
    }
    return response.json()
  });
};