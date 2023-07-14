let birthdayInput = document.querySelector("#birthday-input");

let checkButton = document.querySelector("#check-button");

let displayOutput = document.querySelector(".display-output");

console.log("hey there");

checkButton.addEventListener("click", function isPalindrome() {
  let birthdate = birthdayInput.value;

  let birthdateString = birthdate.replaceAll("-", "");

  let reversedStr = birthdateString.split("").reverse().join("");
  if (birthdateString === reversedStr) {
    displayOutput.innerText = "Your birthday is a palindrom";
  } else {
    displayOutput.innerText = "Your birthday is not a palindrom";
  }
});
