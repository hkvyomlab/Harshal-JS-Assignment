/*
 * Filename: f:\JavaScript Assignment\Question14.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:51:47 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
var n;
var sum=0;
console.log('Armstrong Number is :- ');
for(i=1;i<=1000;i++)
{
j=i;
sum=0;
while(j>0)
{
r=j%10;
sum=sum+(r*r*r);
j=parseInt(j/10);
}
if( sum==i)
{
console.log(sum+',');
}
} 


//To print sum of the digit of a number.
 var value = 1234,sum = 0;

while (value) {
sum += value % 10;
value = Math.floor(value / 10);
}