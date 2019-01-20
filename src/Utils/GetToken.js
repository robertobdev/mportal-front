const login = JSON.parse(localStorage.getItem('login'));
const url = 'http://localhost/api/';
const urlImg = 'http://localhost/storage/';

const update = () => {
  let login = JSON.parse(localStorage.getItem('login'));
  return login ? {
    headers: { 'Authorization': "Bearer " + login.success.token }
  } : null;
}
export { login, update, url, urlImg };