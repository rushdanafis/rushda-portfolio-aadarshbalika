let formData = document.querySelector(".form-data");
let displayScore = document.querySelector(".display-score");
let submitButton = document.querySelector("#submit-btn");
let answers = ["Acute triangle", "Equilateral triangle", "180°","Congruent", "Median"];
submitButton.addEventListener("click", function calculateScores() {
  let score = 0;
  let index = 0;
  const formResults = new FormData(formData);

  for (let value of formResults.values()) {

    if(value===answers[index]){
        score++;
        index++;
       
    }
    displayScore.innerText=`your final score is ${ score }`
    
  }
});


