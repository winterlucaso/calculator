// To-Do List
// - Simplify functions
//   - change updateOperator() to a non-switch function
//   - use more arrow functions on simple functions
// - Backspace Button
// - Round long answers
// - Make "Error" (divide by 0 result) be a hard stop on any actions except for CLEAR

// Functions

// -- Number Click Functions --
// Updates the appropriate operatingNum and updates display screen
function checkNumberClick(number) {
    console.log("You Clicked: " + number)
    // Exit if "ERROR"
    if (operatingNum1 === "ERROR") {
        return;
    }
    // Write to operatingNum2 and reset displayScreen
    if ((operatingNum1 !== "") && (currentOperator !== "undefined")) {
        if (operatingNum2 === "") {
            displayScreen.textContent = "";
        }
        operatingNum2 += number;
        displayScreen.textContent += number;
        console.log("operatingNum1: " + operatingNum1 + " || operatingNum2: " + operatingNum2);
    }
    // Write to operatingNum1
    else {
        operatingNum1 += number;
        displayScreen.textContent += number;
        console.log("operatingNum1: " + operatingNum1 + " || operatingNum2: " + operatingNum2);
    }
}

// -- Operator Functions --
// Determines what to do when operator button is clicked
function checkOperatorClick(operatorChoice) {
    // Skip if no initial number chosen
    if (operatingNum1 === "" || operatingNum1 === "ERROR") {
        return;
    }
    // Update the operator if no second number has been chosen
    else if (operatingNum2 === "") {
        updateOperator(operatorChoice);
    }
    // If two numbers have been chosen, resolve the equation, and then update the operator
    else {
        resolveEquation(operatingNum1, operatingNum2, currentOperator);
        updateOperator(operatorChoice);
    }
}

// Updates the operator
function updateOperator(operatorChoice) {
    // switch(operatorChoice) {
    //     case "add":
    //         currentOperator = "add";
    //         console.log("currentOperator: " + currentOperator);
    //         break;
    //     case "subtract":
    //         currentOperator = "subtract";
    //         console.log("currentOperator: " + currentOperator);
    //         break;
    //     case "multiply":
    //         currentOperator = "multiply";
    //         console.log("currentOperator: " + currentOperator);
    //         break;
    //     case "divide":
    //         currentOperator = "divide";
    //         console.log("currentOperator: " + currentOperator);
    //         break;
    // }
    currentOperator = operatorChoice;
}

// Equals Functions
function checkEqualFunction() {
    if ((operatingNum1 !== "") && (operatingNum2 !== "") && (currentOperator !== "undefined")) {
        resolveEquation(operatingNum1, operatingNum2, currentOperator);
    }
    return;
    // console.log("operatingNum1: " + operatingNum1 + " || operatingNum2: " + operatingNum2);

}

// Calls the appropriate function, displays the result, 
// sets the result to operatingNum1, and resets operatingNum2 to ""
function resolveEquation(number1, number2, op) {
    num1 = Number(number1);
    num2 = Number(number2);
    switch(op) {
        case "add":
            result = add(num1, num2);
            displayScreen.textContent = result;
            operatingNum1 = String(result);
            operatingNum2 = "";
            return;
        case "subtract":
            result = subtract(num1, num2);
            displayScreen.textContent = result;
            operatingNum1 = String(result);
            operatingNum2 = "";
            return;
        case "multiply":
            result = multiply(num1, num2);
            displayScreen.textContent = result;
            operatingNum1 = String(result);
            operatingNum2 = "";
            return;
        case "divide":
            result = divide(num1, num2);
            displayScreen.textContent = result;
            operatingNum1 = String(result);
            operatingNum2 = "";
            return;
    }

}

// Clear Function
function clearFunction() {
    displayScreen.textContent = "";
    operatingNum1 = "";
    operatingNum2 = "";
    currentOperator = "undefined";
    console.log("CLEARED");
}

// Math Functions
function add(num1, num2) {
    return num1 + num2;
};
  
function subtract(num1, num2) {
    return num1 - num2;
};
  
function multiply(num1, num2) {
    return num1 * num2;
};

function divide(num1, num2) {
    if (num2 === 0){
        return "ERROR";;
    }
    return num1/num2;
}

// Script
let currentOperator = "undefined";
let currentDisplay = "";
let operatingNum1 = "";
let operatingNum2 = "";
let result = 0;

// UI
const displayScreen = document.getElementById('display-screen');
const addBtn = document.getElementById('addBtn');
const subtractBtn = document.getElementById('subtractBtn');
const multiplyBtn = document.getElementById('multiplyBtn');
const divideBtn = document.getElementById('divideBtn');
const clearBtn = document.getElementById('clearBtn');
const equalBtn = document.getElementById('equalBtn');
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');


addBtn.addEventListener('click', () => checkOperatorClick("add"));
subtractBtn.addEventListener('click', () => checkOperatorClick("subtract"));
multiplyBtn.addEventListener('click', () => checkOperatorClick("multiply"));
divideBtn.addEventListener('click', () => checkOperatorClick("divide"));
clearBtn.addEventListener('click', () => clearFunction());
equalBtn.addEventListener('click', () => checkEqualFunction());
btn1.addEventListener('click', () => checkNumberClick("1"));
btn2.addEventListener('click', () => checkNumberClick("2"));
btn3.addEventListener('click', () => checkNumberClick("3"));
btn4.addEventListener('click', () => checkNumberClick("4"));
btn5.addEventListener('click', () => checkNumberClick("5"));
btn6.addEventListener('click', () => checkNumberClick("6"));
btn7.addEventListener('click', () => checkNumberClick("7"));
btn8.addEventListener('click', () => checkNumberClick("8"));
btn9.addEventListener('click', () => checkNumberClick("9"));
btn0.addEventListener('click', () => checkNumberClick("0"));

console.log(displayScreen.textContent);
displayScreen.textContent = `${currentDisplay}`;






