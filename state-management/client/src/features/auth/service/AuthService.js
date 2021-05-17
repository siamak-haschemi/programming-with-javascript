export const loginService = async (credentials, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Basic ' + window.btoa(
          credentials.username + ':' + credentials.password)
    },
    body: JSON.stringify(credentials)
  };

  let response = await fetch(`http://localhost:4000/auth/authenticate`,
      requestOptions);

  if (!response.ok) {
    return rejectWithValue(response.data);
  }
  return response.json();
};

export const logoutService = async (token, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  let response = await fetch(`http://localhost:4000/auth/logout`,
      requestOptions);

  if (!response.ok) {
    return rejectWithValue(response.data);
  }
  return response.json();
};