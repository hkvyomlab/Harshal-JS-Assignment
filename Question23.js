/*
 * Filename: f:\JavaScript Assignment\Question23.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:53:40 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
var promise = new Promise(function(resolve,reject){
    const x="Harshal";
    const y="Harshal";
    if(x === y){
        resolve();
    }else{
        reject();
    }
  });
  
  promise.
        then(function (){
            console.log("success");
        }).
        catch(function (){
            console.log("reject");
        });
  