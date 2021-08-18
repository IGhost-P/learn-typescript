// api url
var url = 'https://jsonplaceholder.typicode.com/users/1';

// dom
var username = document.querySelector('#username');
var email = document.querySelector('#email');
var address = document.querySelector('#address');

// user data
var user = {};

/**
 * jsdoc을 이용해서도 타입을 정할수는 있으나, 오류 검사를 해주지진 않는다 => ts-check기능을 를 이용해야함
 * @typedef {object} Address
 * @property {string} street
 */
function startApp() {
  axios
    .get(url)
    .then(function (response) {
      console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
