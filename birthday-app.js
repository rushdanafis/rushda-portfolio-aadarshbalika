const birthDate= document.querySelector("#birthdate");
let luckyNumber= document.querySelector("#lucky-number");
let displayMessege= document.querySelector(".messege");

let luckButton=document.getElementById
("luck-button");


luckButton.addEventListener("click",function summation(){

    let dob= birthDate.value
  

    let dobNumber= dob.replaceAll("-","");
     

     

     let sum= 0;

     for(let i =0; i<dobNumber.length;i++){
        sum = sum +  Number(dobNumber.charAt(i))
        
     }
         luckGenerator(sum,luckyNumber.value)
        
       

      
        

      }
       
    //   return sum;
  
)


// function getNumber(){
//     dob = birthDate.value;
//     summation(dob);
// }
// function summation(date){
//       date.replaceAll("-","");
//         let sum= 0;
//         for(let i=0;i=date.length;i++){
//             sum=sum+ Number(charAt(i));
//         }
//         return sum;
//     }
    
  



    function luckGenerator(sum,lucknum){
            if(sum%lucknum===0){
            displayMessege.innerText="congratulations your birthday is lucky"}
            else{
                displayMessege.innerText= `number ${luckyNumber.value} not so lucky`;
            }}





  
    








// function luckGenerator(sum,lucknum){
//     if(sum%lucknum===0){
//     displayMessege.innerText="congratulations your birthday is lucky"}
//     else{
//         displayMessege.innerText= `number ${luckyNumber.value} not so lucky`;
//     }}


// luckButton.addEventListener("click", function checkLuck(){
//     if(luckyNumber.value&& birthDate.value){
//         function MakeNumber(){
//         let birthnumber= birthDate.replaceAll("-","");
//         let summed= 0;
//         for(let i=0;i=birthnumber.length;i++){
//             sum=sum+ Number(charAt(i));
//         }
//         return sum;
//         function

// }

//     if(luckyNumber.value&& birthDate.value){
//         function MakeNumber(){
//         let birthnumber= birthDate.replaceAll("-","");
//         let summed= 0;
//         for(let i=0;i=birthnumber.length;i++){
//             sum=sum+ Number(charAt(i));
//         }
//         return sum;

//     }else{
//         displayMessege.innerText="c'mon add complete data atleast"
//     }
    


// })


// function MakeNumber(){
//     let birthnumber= birthDate.replaceAll("-","");
//     let summed= 0;
//     for(let i=0;i=birthnumber.length;i++){
//         sum=sum+ Number(charAt(i));
//     }
//     return sum;
// }







 
 
// luckButton.addEventListener("click", function caalculateBirthLuck(){


// })
    
    
     

