/////////////////////////////////////////////////////////////////////////////////////
// User logged in already?
/////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  if (localStorage.getItem("token") && localStorage.getItem("name")) {
    window.location.href = "welcome.html";
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// Gain access to forms
/////////////////////////////////////////////////////////////////////////////////////

const formContainer = document.querySelectorAll(".form-container");

/////////////////////////////////////////////////////////////////////////////////////
// Form close buttons
// formContainer[0] = sign up
// formContainer[1] = log in
/////////////////////////////////////////////////////////////////////////////////////

const formCloseBtn = document.querySelectorAll(".form-close-btn");
formCloseBtn[0].addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.add("hidden");
});
formCloseBtn[1].addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.add("hidden");
});

/////////////////////////////////////////////////////////////////////////////////////
// Display Sign up form
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("sign-up").addEventListener("click", function () {
  formContainer[1].classList.add("hidden");
  formContainer[0].classList.remove("hidden");
});
/////////////////////////////////////////////////////////////////////////////////////
// Display Log in form
/////////////////////////////////////////////////////////////////////////////////////

document.getElementById("log-in").addEventListener("click", function () {
  formContainer[0].classList.add("hidden");
  formContainer[1].classList.remove("hidden");
});

/////////////////////////////////////////////////////////////////////////////////////
// Register Form
/////////////////////////////////////////////////////////////////////////////////////

const registerForm = document.getElementById("register");
// json response message
const registerMessageEl = document.getElementById("register-message");
registerForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const url = "https://sweettreatsheroku.herokuapp.com/users/register";

  const formData = new FormData(registerForm);
  const formDataSerialized = Object.fromEntries(formData);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formDataSerialized),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(formDataSerialized);
    const json = await response.json();
    registerMessageEl.textContent = `${json.message}`;
    if (json.message === "Registration successful") {
      formContainer[0].classList.add("hidden");
      formContainer[1].classList.remove("hidden");
    }
    // console.log(json, "THIS IS JSON");
  } catch (e) {
    console.error(e);
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// Login Form
/////////////////////////////////////////////////////////////////////////////////////

const loginForm = document.getElementById("login");
// json response message
const loginMessageEl = document.getElementById("login-message");
loginForm.addEventListener("submit", async function (event) {
  event.preventDefault();

  const url = "https://sweettreatsheroku.herokuapp.com/users/authenticate";

  const formData = new FormData(loginForm);
  const formDataSerialized = Object.fromEntries(formData);

  try {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formDataSerialized),
      headers: {
        "Content-Type": "application/json",
      },
    });
    // console.log(formDataSerialized);
    const json = await response.json();
    loginMessageEl.textContent = `${json.message}`;
    console.log(json, "THIS IS JSON");

    if (json.token) {
      loginSuccessful(json.token, json.name);
    }
  } catch (e) {
    console.error(e);
  }
});

function loginSuccessful(token, name) {
  localStorage.setItem("token", token);
  localStorage.setItem("name", name);
  window.location.href = "welcome.html";
}
