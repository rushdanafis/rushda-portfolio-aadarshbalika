const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
let errorMessege = document.querySelector(".error-msg");
let numberNotes = document.querySelectorAll(".number-notes");
let notesArray = [2000, 500, 100, 50, 20, 10, 5, 1];

checkButton.addEventListener("click", function validateMoney() {
  errorMessege.style.display = "none";

  if (billAmount.value > 0) {
    if (cashGiven.value >= billAmount.value) {
      let moneyReturn = cashGiven.value - billAmount.value;
      console.log(moneyReturn);
      calculateMoney(moneyReturn);
    } else {
      errorMessege.style.display="block"
      errorMessege.innerText = "oops! seems someone forgot to bring money";
    }
  } else {
    errorMessege.style.display = "block";
    errorMessege.innerText = "enter solid money dude, number can't be negative";
  }
});

function calculateMoney(moneyReturn) {
  for (let i = 0; i < notesArray.length; i++) {
    let numberOfnotes = Math.trunc(moneyReturn / notesArray[i]);
    moneyReturn = moneyReturn % notesArray[i];
    numberNotes[i].innerText = numberOfnotes;
  }
}
