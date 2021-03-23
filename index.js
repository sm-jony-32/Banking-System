 //login button event handler
 const loginBtn = document.getElementById("varify-btn");

 loginBtn.addEventListener("click",function(){
     const loginSec=document.getElementById("login-sec");
     loginSec.style.display="none";

     const transArea=document.getElementById("transection-area");
     transArea.style.display="block";

 }) 

// deposit button handler

let depositAmount = document.getElementById('depositAmount');
let depositBtn = document.getElementById('addDeposit');
let currentDeposit = document.getElementById('currentDeposit');
let totalDeposit = 0;
let totalBalance = 0;

depositBtn.addEventListener('click',function(){

    let deposit = document.getElementById('depositAmount').value;
    // console.log(deposit);
    //console.log(typeof deposit);
    let newDeposit = parseInt(deposit);
    //console.log(typeof newDeposit);
    // let totalDeposit = 0;
    // totalDeposit = totalDeposit + parseInt(currentDeposit.innerHTML) + newDeposit;
    totalDeposit = totalDeposit  + newDeposit;
    // console.log(typeof totalDeposit);
    console.log(totalDeposit);
    // let x= totalDeposit + deposit;
    // console.log(x);
    document.getElementById('currentDeposit').innerHTML = totalDeposit;  

    let currentBalance = totalBalance + totalDeposit;
    document.getElementById('currentBalance').innerHTML = currentBalance; 

    
    
})

// withdraw button handler

let withdrawAmount = document.getElementById('withdrawAmount');
let withdrawBtn = document.getElementById('addWithdraw');
let currentWithdraw = document.getElementById('currentWithdraw');
let totalWithdraw = 0;

withdrawBtn.addEventListener('click',function(){

    let withdraw = document.getElementById('withdrawAmount').value;
    // console.log(deposit);
    //console.log(typeof deposit);
    let newWithdraw = parseInt(withdraw);
    //console.log(typeof newDeposit);
    // let totalDeposit = 0;
    // totalDeposit = totalDeposit + parseInt(currentDeposit.innerHTML) + newDeposit;
    totalWithdraw = totalWithdraw  + newWithdraw;
    // console.log(typeof totalDeposit);
    console.log(totalWithdraw);
    // let x= totalDeposit + deposit;
    // console.log(x);
    document.getElementById('currentWithdraw').innerHTML = totalWithdraw;  
    
    //final transection

     let currentBalance =totalDeposit - totalWithdraw;
     console.log(currentBalance);
     document.getElementById('currentBalance').innerHTML = currentBalance; 
})
