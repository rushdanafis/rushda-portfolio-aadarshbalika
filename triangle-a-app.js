const angleOne = document.querySelector("#angle-one");
const angleTwo = document.querySelector("#angle-two");
const angleThree = document.querySelector("#angle-three");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
let answerMessege = document.querySelector("#answer-messege");

isTriangleBtn.addEventListener("click", function calculateSum() {
  let sumOfTriangle =
    Number(angleOne.value) + Number(angleTwo.value) + Number(angleThree.value);

  if (sumOfTriangle === 180) {
    answerMessege.style.display = "block";

    answerMessege.innerText = " hurray! these angles form a tringle.";
  } else {
    answerMessege.style.display = "block";

    answerMessege.innerText =
      " triangle not formed  PS. sum of all three angles of a trangle is 180 degree";
  }
});

// let angleSum= angle1+angle2+angle3;

// answerMessege.style.display="none"

//    let sumOfTriangle =  Number(angleOne.value)+Number(angleTwo.value)+Number(angleThree.value);
//    console.log(sumOfTriangle);

//    if(sumOfTriangle===180){
//         answerMessege.style.display="block"

//         answerMessege.innerText=" hurray! these anbgles form a tringle."

//     }else{
//         answerMessege.style.display="block"

//         answerMessege.innerText=" triangle not formed  PS. sum of all three sides of trangle must be 180 degree"
//     }

//
