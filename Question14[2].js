/*
 * Filename: f:\JavaScript Assignment\Question14[2].js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:55:36 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
const findSum = (num) => {
    if(num < 10){
       return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
 }
 console.log(findSum(2568));