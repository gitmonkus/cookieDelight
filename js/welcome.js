/////////////////////////////////////////////////////////////////////////////////////
// User not logged in?
/////////////////////////////////////////////////////////////////////////////////////

document.addEventListener("DOMContentLoaded", function () {
  if (!localStorage.getItem("token") && !localStorage.getItem("name")) {
    window.location.href = "/";
  }
});

/////////////////////////////////////////////////////////////////////////////////////
// Display name from local storage
/////////////////////////////////////////////////////////////////////////////////////
const welcomeNameEl = document.getElementById("welcome-name");
const firstNameEl = localStorage.getItem("name");
welcomeNameEl.textContent = `Welcome, ${firstNameEl}!`;

/////////////////////////////////////////////////////////////////////////////////////
// Log out
/////////////////////////////////////////////////////////////////////////////////////
document.getElementById("log-out").addEventListener("click", function () {
  localStorage.clear();
  window.location.href = "/";
});

/////////////////////////////////////////////////////////////////////////////////////
// Is input checked
/////////////////////////////////////////////////////////////////////////////////////

function inventoryMachine(num) {
  if (
    checkTreat[num].checked &&
    cardImgText[num].classList.contains("unavailable")
  ) {
    inventory[num].isChecked = true;
    inventory[num].inStock = false;
    console.log(inventory[num]);
  } else if (checkTreat[num].checked) {
    inventory[num].isChecked = true;
    inventory[num].inStock = true;
    console.log(`${num} is checked and in stock`);
  } else {
    inventory[num].isChecked = false;
    console.log("unchecked");
  }
}

let inventory = [
  { isChecked: false, prodName: "Choco-Chip Sandwich!", inStock: true },
  { isChecked: false, prodName: "Chosen Chestnut!", inStock: true },
  { isChecked: false, prodName: "Walnut Star!", inStock: true },
  { isChecked: false, prodName: "Da' Coffee Dipper!", inStock: true },
  { isChecked: false, prodName: "Festive Faves!", inStock: true },
  { isChecked: false, prodName: "Lemon Heart!", inStock: true },
  { isChecked: false, prodName: "Marvelous Macaron!", inStock: true },
  { isChecked: false, prodName: "Orange Dream!", inStock: true },
  { isChecked: false, prodName: "Original Chocolate Chip!", inStock: true },
];

const cardImgText = document.querySelectorAll(".card-img-text");

const checkTreat = document.querySelectorAll(".check-treat");

checkTreat[0].addEventListener("change", function () {
  inventoryMachine(0);
});
checkTreat[1].addEventListener("change", function () {
  inventoryMachine(1);
});
checkTreat[2].addEventListener("change", function () {
  inventoryMachine(2);
});
checkTreat[3].addEventListener("change", function () {
  inventoryMachine(3);
});
checkTreat[4].addEventListener("change", function () {
  inventoryMachine(4);
});
checkTreat[5].addEventListener("change", function () {
  inventoryMachine(5);
});
checkTreat[6].addEventListener("change", function () {
  inventoryMachine(6);
});
checkTreat[7].addEventListener("change", function () {
  inventoryMachine(7);
});
checkTreat[8].addEventListener("change", function () {
  inventoryMachine(8);
});
