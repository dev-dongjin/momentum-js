const greeting = document.querySelector('#greeting');
const loginForm = document.querySelector('#login-form');
const loginMessage = document.querySelector('#login-message');
const loginInput = document.querySelector('#login-form input');
const loginBox = document.querySelector('#loginBox');

const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'userName';

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  loginBox.classList.add(HIDDEN_CLASSNAME);
  loginMessage.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);
}

function paintGreetings(userName) {
  greeting.innerText = `Good Afternoon, ${userName}`;
  const loginElementList = document.getElementsByClassName('login-shown');
  Array.from(loginElementList).forEach((element) =>
    element.classList.remove(HIDDEN_CLASSNAME)
  );
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUserName = localStorage.getItem(USERNAME_KEY);

if (!savedUserName) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginBox.classList.remove(HIDDEN_CLASSNAME);
  loginMessage.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  paintGreetings(savedUserName);
}
