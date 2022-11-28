/*
 * Filename: f:\JavaScript Assignment\Question11.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:48:49 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function billCalculator(bill) {
    if (bill < 5)
        return "Sorry! No Discount";
    else if (5 < bill && bill < 25)
        return "Discount : " + ((bill / 100) * 5) + "Rs";
    else if (25 < bill && bill < 50)
        return "Discount : " + ((bill / 100) * 15) + "Rs";
    else if (50 < bill)
        return "Discount : " + ((bill / 100) * 20) + "Rs";
}
bill = 100;
console.log(billCalculator(bill));