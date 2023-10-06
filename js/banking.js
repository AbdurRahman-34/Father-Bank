//Handle Deposit Button Even
document.getElementById('deposit-button').addEventListener('click', function(){
    // ইনপুট ফিল্ড কত এমাউন্ট দেওয়া হয়েছে। তা নিয়ে আসা।
    //get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositText);

    //update deposit total
    // ডিপোজিট total এমাউন্ট অ্যাড করার সিস্টেম ::
   const depositTotal = document.getElementById('deposit-total');
   const previousDeposiText = depositTotal.innerText;
   const previousDepositAmount = parseFloat(previousDeposiText);
   const newDepositTotal = previousDepositAmount + newDepositAmount;

   depositTotal.innerText = newDepositTotal;

   
  //update acount balance 
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousBalanceTotal = parseFloat(balanceTotalText);
  const newBalanceTotal = previousBalanceTotal + newDepositAmount;
  balanceTotal.innerText = newBalanceTotal;
   // input ক্লিয়ার করার সিস্টেম:::: /// clear the deposit input field
   depositInput.value = '';

});


//handel withdraw event handler
document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
    console.log(newWithdrawAmount);

    //set withdraw total
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdraText = withdrawTotal.innerText;
    const previousWithdraTotal = parseFloat(previousWithdraText);

    const newWithdrawTotal =  previousWithdraTotal + newWithdrawAmount;
    withdrawTotalinnerText = newWithdrawTotal;


    //update banlace 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotalinnerText = newBalanceTotal;

        // clear withdraw input
        withdrawInput.value = '';

})