/*
 * Filename: f:\JavaScript Assignment\Question9[prime].js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:46:03 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
let i =0,num =0;
var  primeNumbers = "";

       for (i = 1; i <= 100; i++)         
       { 		  	  
          let counter=0; 	  
          for(num =i; num>=1; num--)
	  {
             if(i%num==0)
	     {
 		counter = counter + 1;
	     }
	  }
	  if (counter ==2)
	  {
	     primeNumbers = primeNumbers + i + " ";
	  }	
       }	
       console.log("Prime numbers from 1 to 100 are :");
       console.log(primeNumbers);0