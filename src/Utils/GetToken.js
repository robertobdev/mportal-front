const login = JSON.parse(localStorage.getItem('login'));

const config = login ? {
  headers: { 'Authorization': "Bearer " + login.success.token }
} : null;

const url = 'http://localhost/api/';
const urlImg= 'http://localhost/storage/';
export {login, config, url, urlImg};