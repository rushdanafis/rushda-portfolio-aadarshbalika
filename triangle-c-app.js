let firstSide = document.querySelector("#first-side");
let secondSide = document.querySelector("#second-side");
let outPutMessege = document.querySelector(".output-messege");
let checkBtn = document.querySelector("#check-hypotenuse");

checkBtn.addEventListener("click", function calculateValues() {
  let hypotenuse = Math.sqrt(
    Math.pow(Number(firstSide.value), 2) + Math.pow(Number(secondSide.value), 2)
  );
  outPutMessege.innerText = ` The length of hypotenuse is ${hypotenuse}cm`;
});
