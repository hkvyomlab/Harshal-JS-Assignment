/*
 * Filename: f:\JavaScript Assignment\Question4.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:11:19 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function capitalizeFirstLetter(str) {
    strArr = str.split(" ");
    newStr = "";
    for (var i = 0; i < strArr.length; i++) {
        newStr += strArr[i].charAt(0).toUpperCase() + strArr[i].slice(1) + " ";
    }
    return newStr;
}
str = "hello everyone my name is harshal and I am certified salesforce administrator.";
console.log(capitalizeFirstLetter(str));