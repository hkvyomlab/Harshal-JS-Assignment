/*
 * Filename: f:\JavaScript Assignment\Question24.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:53:49 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
    resolve('Promise resolved')}, 4000); 
});

// async function
async function asyncFunc() {

    // wait until the promise resolves 
    let result = await promise; 

    console.log(result);
    console.log('Hello I am SalesForce Developer');
}

// calling the async function
asyncFunc();
