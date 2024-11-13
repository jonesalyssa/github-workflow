//DOM =======================
const inputField = document.querySelector("#number");
const form = document.querySelector("form");
const button = document.querySelector; //==== seems like I need to do something with this but I'm not sure what
const outputBank = document.querySelector("#numberBank output");
const outputOdds = document.querySelector("odds output");
const outputEvens = document.querySelector("#evens output");
const sortAllButton = document.querySelector("#sortAll");
const sortOneButton = document.querySelector("#sortOne");

//=========================== DO NOT TOUCH BELOW

let numberBank = [];
let odds = [];
let evens = [];

//===========================

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const number = parseInt(inputField.value, 10);
  if (!isNaN(number)) {
    numberBank.push(number);
    updateNumberBankDisplay();
  }
  inputField.value = "";
});

function updateNumberBankDisplay() {
  outputBank.textContent = numberBank.join(", ");
}

//==

function updateSortedDisplays() {
  outputOdds.textContent = odds.join(", ");
  outputEvens.textContent = evens.join(", ");
}

sortOneButton.addEventListener("click", function () {
  if (numberBank.length > 0) {
    const number = numberBank.shift();
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
    updateNumberBankDisplay();
    updateSortedDisplays();
  }
});

sortAllButton.addEventListener("click", function () {
  while (numberBank.length > 0) {
    const number = numberBank.shift();
    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }
  }
  updateNumberBankDisplay();
  updateSortedDisplays();
});
