let baseLength= document.querySelector("#base-length");
let heightLength= document.querySelector("#height-length");

let areaBtn = document.querySelector("#get-area");

let outputValue= document.querySelector(".output-value");


areaBtn.addEventListener("click",function calculateArea() {
    
    let area= (Number(baseLength.value)* Number(heightLength.value))/2

    outputValue.innerText=` the area is ${area}cm²`
    
})
