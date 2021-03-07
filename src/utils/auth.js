export const BASE_URL = 'https://auth.nomoreparties.co';

export const register = (email, password) => {
  //С помощью fetch она создаёт POST-запрос и регестрирует пользователя
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    //После этого в первом обработчике then мы получим объект res, который содержит информацию об ответе и статус ответа. При успешном ответе вернётся статус 200 и при успехе получаем 
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return (e)
      }
    })
    //Этот обработчик then вернёт ещё один res с данными пользователя (которые он ввёл в форму регистрации), адресом запроса и уникальным подписанным JWT-токеном.
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const login = (email, password) => {
  //С помощью fetch она создаёт POST-запрос и регестрирует пользователя
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ email, password })
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return (e)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};

export const checkToken = (jwt) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${jwt}`,
    }
  })
    .then((response) => {
      try {
        if (response.status === 200) {
          return response.json();
        }
      } catch (e) {
        return (e)
      }
    })
    .then((res) => {
      return res;
    })
    .catch((err) => console.log(err));
};
