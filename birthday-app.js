const birthDate = document.querySelector("#birthdate");
let luckyNumber = document.querySelector("#lucky-number");
let displayMessege = document.querySelector(".messege");

let luckButton = document.getElementById("luck-button");

luckButton.addEventListener("click", function summation() {
  let dob = birthDate.value;

  let dobNumber = dob.replaceAll("-", "");

  let sum = 0;

  for (let i = 0; i < dobNumber.length; i++) {
    sum = sum + Number(dobNumber.charAt(i));
  }
  luckGenerator(sum, luckyNumber.value);
});

function luckGenerator(sum, lucknum) {
  if (sum % lucknum === 0) {
    displayMessege.innerText = "congratulations your birthday is lucky";
  } else {
    displayMessege.innerText = `number ${luckyNumber.value} not so lucky`;
  }
}
