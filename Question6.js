/*
 * Filename: f:\JavaScript Assignment\Question6.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:14:56 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
arr1 = [10, 20, 30, 40, 50, 60, 70];
    arr2 = [100, 200, 300, 400, 500, 600, 700];
    let totalOfBothArray = sumOfArr1 = sumOfArr2 = 0;
    
    for (let i = 0; i < arr1.length; i++) {
        sumOfArr1 += arr1[i];
        sumOfArr2 += arr2[i];
        totalOfBothArray += arr1[i] + arr2[i];
    }
    console.log(sumOfArr1, sumOfArr2, totalOfBothArray);