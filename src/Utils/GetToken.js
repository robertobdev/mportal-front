const login = JSON.parse(localStorage.getItem('login'));
const config = {
  headers: { 'Authorization': "Bearer " + login.success.token }
};
export {login, config};