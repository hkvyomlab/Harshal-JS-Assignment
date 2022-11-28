/*
 * Filename: f:\JavaScript Assignment\Question5.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:14:02 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function findStringIsPresentOrNot(searchStr) {
    str = "I am a Salesforce developer and I like coding";
    if (str.includes(searchStr))
        console.log("String contains '" + searchStr + "'.");
    else
        console.log("String does not contains : '" + searchStr + "'.");
}
findStringIsPresentOrNot("developer");