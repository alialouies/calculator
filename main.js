// const main = document.querySelector('.calculator');
const result = document.querySelector('#display');
const displayNumbers = document.querySelector('#user-input')
const numberButtons = document.querySelectorAll('.number');
const operationButtons = document.querySelectorAll('.operator');
const clearButton = document.querySelector('#clear');
const deleteButton = document.querySelector('#clear-one');
const equalButton = document.querySelector('#equal-sign');

clearButton.addEventListener('click', clear);
deleteButton.addEventListener('click', clearOne);
numberButtons.forEach(button => button.addEventListener('click', display));
operationButtons.forEach(button => button.addEventListener('click', secondOperator));
equalButton.addEventListener('click', equals);


function clear() {
    displayNumbers.textContent = '';
    result.textContent = 0;
    // no empty lines at the end of the function
};

function clearOne() {
    const newDisplayValue = result.textContent = result.textContent.slice(0, -1);
    return newDisplayValue;

};


function display(e) {
    if (result.textContent.charAt(0) === '0') {
        result.textContent = '';
    };
    let number = e.target.textContent;
    if (number === '.' && result.textContent.includes('.')) return
    result.textContent = result.textContent + number;

};

let firstOperand;
let operator;
let secondOperand;


function secondOperator(e){
    if (displayNumbers.textContent !== '' && result.textContent !== ''){
        firstOperand = displayNumbers.textContent;
        operator = e.target.textContent;
        secondOperator = result.textContent;
        operate(firstOperand, operator, secondOperator)
    } else {
        startCalculator(e);
    }
};

function startCalculator(e) {
    firstOperand = displayNumbers.textContent = result.textContent;
    operator = e.target.textContent;
    result.textContent = '';
    secondOperand = result.textContent;

};


function equals() {
    firstOperand = displayNumbers.textContent;
    operator;
    secondOperand = result.textContent;
    equalTo(firstOperand, operator, secondOperand);
};

function add(a, b) {
    return parseFloat(a) + parseFloat(b);
};

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
};

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
};

function divide(a, b) {
    if (parseFloat(b) == 0) {
        // You should at least display the error.
        // For example with:
        alert('Error, you tried to divide by 0');
        return 'ERROR!';
    } else {
        return parseFloat(a) / parseFloat(b);
    }
};

function remainder(a, b) {
    return parseFloat(a) % parseFloat(b);
};


function operate(a, operator, b) {
    result.textContent = '';
    total = 0;
    switch (operator) {
        case '+':
            total += add(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            displayNumbers.textContent = result.textContent;
            result.textContent = '';
            break;
        case '-':
            total += subtract(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            displayNumbers.textContent = result.textContent;
            result.textContent = '';
            break;
        case 'x':
            total += multiply(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            displayNumbers.textContent = result.textContent;
            result.textContent = '';
            break;
        case '/':
            total += divide(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            displayNumbers.textContent = result.textContent;
            result.textContent = '';
            break;
        case '%':
            total += remainder(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            displayNumbers.textContent = result.textContent;
            result.textContent = '';
            break;
    }
};

function equalTo(a, operator, b) {
    result.textContent = '';
    total = 0;
    switch (operator) {
        case '+':
            total += add(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            break;
        case '-':
            total += subtract(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            break;
        case 'x':
            total += multiply(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            break;
        case '/':
            total += divide(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            break;
        case '%':
            total += remainder(a, b);
            result.textContent = Math.round(total * 100) / 100;
            displayNumbers.textContent = '';
            break;
    }
};
