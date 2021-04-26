const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const request = () => {
  return fetch(BASE_URL)
    .then(respone => respone.json())
};