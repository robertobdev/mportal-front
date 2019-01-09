const login = JSON.parse(localStorage.getItem('login'));

const config = login ? {
  headers: { 'Authorization': "Bearer " + login.success.token }
} : null;
export {login, config};