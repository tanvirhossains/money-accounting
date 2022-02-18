// get value from input box
function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

//----------click fuctionn---------
document.getElementById('calculate').addEventListener('click', function () {
    //----------------- inputing the value into food------------

    const foodInput = getInput('food');
    const rentInput = getInput('rent');
    const clothesInput = getInput('clothes');


    //-----------geting the total expense + adding to the total expense -----
    const totalExIput = document.getElementById('total-expense');
    const totalNumber = parseFloat(totalExIput.value)

    const totalExpense = foodInput + rentInput + clothesInput;
    totalExIput.innerText = totalExpense;


    //getting income and minusing from expense 
    const incomeInput = document.getElementById('income');
    const incomeNumber = parseFloat(incomeInput.value);


    const balanceInput = document.getElementById('balance');
    const balanceNumber = parseFloat(balanceInput.value);

    const balance = incomeNumber - totalExpense;
    balanceInput.innerText = balance;
})




