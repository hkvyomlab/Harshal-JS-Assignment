/*
 * Filename: f:\JavaScript Assignment\Question19.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:52:53 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function factorial(x) {
    executions++;
      if (x > 1) {
         if (executions % 20 === 0) {
             return (function() {
                 var y = x;
                 setTimeout(function(y) { return y*factorial(y-1); }, 1);
              });
         } else {
           return x*factorial(x-1);
         }
      } else {
     executions = 0;
         return 1;
      }
   }
   