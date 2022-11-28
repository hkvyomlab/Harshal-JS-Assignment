/*
 * Filename: f:\JavaScript Assignment\Question7.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:15:25 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function rotateLeftByOne(arr) {
    let lastElement = arr[0];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = lastElement;
    console.log(arr);
}
arr = [10, 20, 30, 40, 50, 60];
rotateLeftByOne(arr);