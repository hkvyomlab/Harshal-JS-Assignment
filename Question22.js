/*
 * Filename: f:\JavaScript Assignment\Question22.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:53:29 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

let chain = Promise.resolve();
for (let count = 25; count >= 5; --count) {
  chain = chain.then(() => {
    console.log(count);
    return wait(5000);
  });
}
