export const incrementByValueService = async (token, value,
    rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
    body: JSON.stringify(value)
  };

  let response = await fetch(`http://localhost:4000/counter/incrementByValue`,
      requestOptions);

  if (!response.ok) {
    return rejectWithValue(response.data);
  }
  return response.json();
};

export const resetService = async (token, rejectWithValue) => {

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    }
  };

  let response = await fetch(`http://localhost:4000/counter/reset`,
      requestOptions);

  if (!response.ok) {
    return rejectWithValue(response.data);
  }
  return response.json();
};