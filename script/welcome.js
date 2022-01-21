/////////////////////////////////////////////////////////////////////////////////////
// User not logged in?
/////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("token") && !localStorage.getItem("name")) {
    window.location.href = "https://sweettreathero.netlify.app";
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// Display name from local storage
/////////////////////////////////////////////////////////////////////////////////////
const welcomeNameEl = document.getElementById("welcome-name");
const firstNameEl = localStorage.getItem("name");
welcomeNameEl.textContent = `Welcome back, ${firstNameEl}!`;

/////////////////////////////////////////////////////////////////////////////////////
// Log out
/////////////////////////////////////////////////////////////////////////////////////
document.getElementById("log-out").addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "https://sweettreathero.netlify.app";
});

/////////////////////////////////////////////////////////////////////////////////////
// Is input checked
/////////////////////////////////////////////////////////////////////////////////////

let inventory = {};

const cardImgText = document.querySelectorAll(".card-img-text");

const checkTreat = document.querySelectorAll(".check-treat");

checkTreat[0].addEventListener("change", function () {
  if (
    checkTreat[0].checked &&
    cardImgText[0].classList.contains("out-of-stock")
  ) {
    inventory["checked"] = true;
    inventory["prodName"] = cardImgText[0].textContent;
    inventory["inStock"] = false;
    console.log(inventory);
  } else if (checkTreat[0].checked) {
    console.log("just checked and in stock");
  }
});
checkTreat[1].addEventListener("change", function () {
  if (checkTreat[1].checked) {
    console.log("checked");
  }
});
checkTreat[2].addEventListener("change", function () {
  if (checkTreat[2].checked) {
    console.log("checked");
  }
});
checkTreat[3].addEventListener("change", function () {
  if (checkTreat[3].checked) {
    console.log("checked");
  }
});
checkTreat[4].addEventListener("change", function () {
  if (checkTreat[4].checked) {
    console.log("checked");
  }
});
checkTreat[5].addEventListener("change", function () {
  if (checkTreat[5].checked) {
    console.log("checked");
  }
});
checkTreat[6].addEventListener("change", function () {
  if (checkTreat[6].checked) {
    console.log("checked");
  }
});
checkTreat[7].addEventListener("change", function () {
  if (checkTreat[7].checked) {
    console.log("checked");
  }
});
checkTreat[8].addEventListener("change", function () {
  if (checkTreat[8].checked) {
    console.log("checked");
  }
});
