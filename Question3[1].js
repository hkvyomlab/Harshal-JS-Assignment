/*
 * Filename: f:\JavaScript Assignment\Question3[1].js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:13:33 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
let myString = "Pune is the best city";
let mySubString = "Pune";

let myStringLC = myString.toLowerCase();
let mySubStringLC = mySubString.toLowerCase();

let count = myStringLC.split(mySubStringLC).length - 1;
console.log();