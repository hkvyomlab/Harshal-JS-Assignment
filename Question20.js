/*
 * Filename: f:\JavaScript Assignment\Question20.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:53:08 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}

// take input
const string = prompt('Enter a string: ');

const result = countVowel(string);

console.log(result);
