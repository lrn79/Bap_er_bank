document.getElementById('deposit_button').addEventListener('click', function () {


    //get amount deposited
    const depositeInput = document.getElementById('deposit_input');
    const newdepositeAmount = depositeInput.value;
    // console.log(depositeAmount);


    const depositTotal = document.getElementById('deposit_total');

    const previousDepositTotal = depositTotal.innerText;
    const newDepositTotal = parseFloat(previousDepositTotal) + parseFloat(newdepositeAmount);

    depositTotal.innerText = newDepositTotal;

    //UPDATE BALANCE

    const balanceTotal = document.getElementById('balance_total');

    const balenceTotalText = balanceTotal.innerText;
    previousBalenceTotal = parseFloat(balenceTotalText);
    console.log(balenceTotalText);

    const newBalanceTotal = previousBalenceTotal + parseFloat(newdepositeAmount);
    balanceTotal.innerText = newBalanceTotal;





    // clear the deposiet value 
    depositeInput.value = '';
});



// handel withdraw event handler


document.getElementById('withdraw_button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw_input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);


    // setwithdraaw total 
    const withdrawTotal = document.getElementById('withdraw_total');
    const previousWithdrawText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    // update balnce 

    const balanceTotal = document.getElementById('balance_total');
    const previousBalenceText = balanceTotal.innerText;
    const previousBalenceTotal = parseFloat(previousBalenceText)
    const newBalanceTotal = previousBalenceTotal - newWithdrawAmount;

    balanceTotal.innerText = newBalanceTotal;

    // clear withdraw amount 

    withdrawInput.value = '';
})