const computerChoiceDisplay = document.getElementById("computer-choice");
const userChoiceDisplay = document.getElementById("user-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

possibleChoices.forEach((possibleChoices) =>
  possibleChoices.addEventListener("click", (e) => {
    userChoice = e.target.id;
    userChoiceDisplay.innerHTML = userChoice;
    generateComputerChoice();
    getResult();
  })
);

function generateComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3) + 1; // или можно использовать possibleChoices.length т.е( * possibleChoices.length)

  if (randomNumber === 1) {
    computerChoice = "камень";
  }
  if (randomNumber === 2) {
    computerChoice = "ножницы";
  }
  if (randomNumber === 3) {
    computerChoice = "бумага";
  }
  computerChoiceDisplay.innerHTML = computerChoice;
}

function getResult() {
  if (computerChoice === userChoice) {
    result = "НИЧЬЯ";
  }
  if (computerChoice === "камень" && userChoice === "бумага") {
    result = "ТЫ ПОБЕДИЛ!";
  }
  if (computerChoice === "камень" && userChoice === "ножницы") {
    result = "ТЫ ПРОИГРАЛ!";
  }
  if (computerChoice === "бумага" && userChoice === "ножницы") {
    result = "ТЫ ПОБЕДИЛ!";
  }
  if (computerChoice === "бумага" && userChoice === "камень") {
    result = "ТЫ ПРОИГРАЛ!";
  }
  if (computerChoice === "ножницы" && userChoice === "камень") {
    result = "ТЫ ПОБЕДИЛ!";
  }
  if (computerChoice === "ножницы" && userChoice === "бумага") {
    result = "ТЫ ПРОИГРАЛ!";
  }
  resultDisplay.innerHTML = result;
}
