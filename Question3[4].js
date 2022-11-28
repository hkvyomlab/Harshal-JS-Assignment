/*
 * Filename: f:\JavaScript Assignment\Question3[4].js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:10:05 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function reverseString(str) {

    // empty string
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}