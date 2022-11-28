/*
 * Filename: f:\JavaScript Assignment\Question12.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:50:15 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
let rev = 0;
let num = 123456;
let lastDigit;

while(num != 0){
	lastDigit = num % 10;
  rev = rev * 10 + lastDigit;
  num = Math.floor(num/10);
}

console.log("Reverse number : "+rev);