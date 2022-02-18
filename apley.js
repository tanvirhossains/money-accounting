function getInput(inputId) {
    const input = document.getElementById(inputId);
    const inputValue = input.value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// function calculatingIncomeExpenses(){

// }


document.getElementById('calculate').addEventListener('click', function () {
    //----------------- inputing the value into food------------
    // const input = document.getElementById('food');
    // const inputValue = input.value;
    // const inputNumber = parseFloat(inputValue);

    // const inputRent = document.getElementById('rent');
    // const inputVR = inputRent.value;
    // const inputrNumber = parseFloat(inputVR);

    // const clothInput = document.getElementById('clothes');
    // const inputVC = clothInput.value;
    // const inputcNumber = parseFloat(inputVC);

    const foodInput = getInput('food');
    const rentInput = getInput('rent');
    const clothesInput = getInput('clothes');


    //geting the total expense + adding to the total expense 
    const totalExIput = document.getElementById('total-expense');
    const totalExValue = totalExIput.value;
    const totalNumber = parseFloat(totalExValue)

    // const expenseInput = getInput('total-expense')
    //  const totalExpense = inputNumber + inputrNumber + inputcNumber;
    const totalExpense = foodInput + rentInput + clothesInput;
    totalExIput.innerText = totalExpense;

    // expenseInput.innerText =totalExpense;





    //getting income and misusing from expense 
    const incomeInput = document.getElementById('income');
    const incomeValue = incomeInput.value;
    const incomeNumber = parseFloat(incomeValue);


    // const balanceInput = getInput('balance')
    const balanceInput = document.getElementById('balance');
    const balanceValue = balanceInput.value;
    const balanceNumber = parseFloat(balanceValue);

    const balance = incomeNumber - totalExpense;

    balanceInput.innerText = balance;


    // console.log(inputNumber, inputcNumber, inputrNumber, totalExIput.innerText, balanceInput.innerText)
})




// function verifyPin() {
//     const foodInput = getInput('food').value;
//     const rentInput = getInput('rent').value;
//     const clothesInput = getInput('clothes').value;
//     // const isNumber = foodInput 
//     // const pin = document.getElementById('').value;
//     // const typedNumber = document.getElementById('typed-number').value;
//     const notifySuccess = document.getElementById('notify-positive');
//     const notifyFail = document.getElementById('notify-number');

//     if (foodInput > 0) {

//         notifySuccess.style.display = 'block';
//         notifyFail.style.display = 'none'
//     }
//     else {

//         notifyFail.style.display = 'block';
//         notifySuccess.style.display = 'none';

//     }
//     console.log('varifying chacking ')
// }