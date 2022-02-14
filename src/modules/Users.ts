const apiUrl = 'https://jsonplaceholder.typicode.com/users';

export const getAllUsers = async () => {
  let response = await fetch(apiUrl, {
    method: 'GET',
  });
  if (response.ok) {
    let responseBody = await response.json();
    return responseBody;
  }
};

export const getUser = (id: string) => {};
