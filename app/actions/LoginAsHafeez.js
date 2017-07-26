// import request from 'request';

export const LoginAsHafeez = () => {
  const data = new FormData();
  data.append('login', 'hafeez1042@gmail.com');
  data.append('password', 'password');

  fetch('http://127.0.0.1:8000/api/v1/login', {
    method: 'POST',
    body: data
  });
  // request({
  //   uri: 'http://127.0.0.1:8000/api/v1/login',
  //   method: 'POST',
  //   form: {
  //     login: 'hafeez1042@gmail.com',
  //     password: 'password'
  //   },
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded',
  //   }
  // }, (error, response, body) => {
  //   console.log('request');
  // })
  // console.log('request complete')
};
