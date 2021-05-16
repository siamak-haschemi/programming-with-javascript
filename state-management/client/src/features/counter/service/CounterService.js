export const incrementByValueService = (token, value, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(value)
  };

  return fetch(`http://localhost:4000/counter/incrementByValue`, requestOptions)
  .then(response => {
    if (!response.ok) {
      return rejectWithValue(response.data);
    }
    return response.json()
  });
};

export const resetService = (token, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  return fetch(`http://localhost:4000/counter/reset`, requestOptions)
  .then(response => {
    if (!response.ok) {
      return rejectWithValue(response.data);
    }
    return response.json()
  });
};