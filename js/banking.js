 // handale deposite button
 document.getElementById('deposite-button').addEventListener('click',function(){
     //deposite money
   const depositeInput =document.getElementById('deposit-input');

const newdepositeAmounttext =depositeInput.value;
//parse float for covert intiger to number
const newdepositeAmount =parseFloat(newdepositeAmounttext);

//update deposite total
const depositeTotal=document.getElementById('deposite-total');

const previousDepositeAmounttext=depositeTotal.innerText;

const previousDepositeAmount=parseFloat(previousDepositeAmounttext);

const newDepositeTotal=previousDepositeAmount+newdepositeAmount;

 depositeTotal.innerText=newDepositeTotal;

//update balance

const balanceTotal =document.getElementById('balance-total');
const balanceTotaltext=balanceTotal.innerText;
const previousBalanceTotal=parseFloat(balanceTotaltext)
const newBalanceTotal=previousBalanceTotal+newdepositeAmount;
balanceTotal.innerText=newBalanceTotal;
//input clear
 depositeInput.value='';




});
//handle withdraw event handeler
document.getElementById('withdraw-button').addEventListener('click',function(){

const withdrawInput =document.getElementById('withdraw-input');
const withdrawAmountText=withdrawInput.value;

const newwithdrawAmount =parseFloat(withdrawAmountText);
console.log(newwithdrawAmount);

//set withdraw total

const withdrawTotal =document.getElementById('withdraw-total');

const previousWithdrawtext=withdrawTotal.innerText;

const previouswithdrawTotal=parseFloat(previousWithdrawtext);

const newwithdrawTotal =previouswithdrawTotal+newwithdrawAmount;

withdrawTotal.innerText=newwithdrawTotal;



//update balance

const balanceTotal =document.getElementById('balance-total');

const previousBalanceTotalText =balanceTotal.innerText;


const previousBalanceTotal =parseFloat(previousBalanceTotalText);


const newBalanceTotal =previousBalanceTotal-newwithdrawAmount;
balanceTotal.innerText=newBalanceTotal;



// clear withdrawInput
withdrawInput.value='';


   
});
