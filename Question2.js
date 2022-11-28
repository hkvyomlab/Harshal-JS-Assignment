/*
 * Filename: f:\JavaScript Assignment\Question2.js
 * Path: f:\JavaScript Assignment
 * Created Date: Tuesday, November 22nd 2022, 9:29:45 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// take the operand input
const number1 = parseFloat(prompt('Enter first number: '));
const number2 = parseFloat(prompt('Enter second number: '));

let result;

// using if...else if... else
if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else {
    result = number1 / number2;
}

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);