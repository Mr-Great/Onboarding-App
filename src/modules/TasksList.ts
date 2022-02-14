const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

export const getUserTasks = async (id: number) => {
  let response = await fetch(`${apiUrl}?userId=${id}`, {
    method: 'GET',
  });
  if (response.ok) {
    let responseBody = await response.json();
    return responseBody;
  }
};
