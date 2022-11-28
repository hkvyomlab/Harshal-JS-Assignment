/*
 * Filename: f:\JavaScript Assignment\Question15.js
 * Path: f:\JavaScript Assignment
 * Created Date: Wednesday, November 23rd 2022, 8:51:57 pm
 * Author: HARSHAL
 * 
 * Copyright (c) 2022 Your Company
 */
function validate()
{ 
   if( document.StudentRegistration.firstname.value == "" )
   {
     alert( "Please Enter First Name!" );
     document.StudentRegistration.firstname.focus() ; // foucs():-set the element as active elelment in current document
     return false;
   }
   if( document.StudentRegistration.lastname.value == "" )
   {
     alert( "Please Enter Last Name!" );
     document.StudentRegistration.lastname.focus() ;
     return false;
   }  
   
   if( document.StudentRegistration.paddress.value == "" )
   {
     alert( "Please Enter Postal Address!" );
     document.StudentRegistration.paddress.focus() ;
     return false;
   }
   
  if( document.StudentRegistration.mobileno.value == "" ||
  isNaN( document.StudentRegistration.mobileno.value) ||
  document.StudentRegistration.mobileno.value.length != 10 )
{
alert( "Please Enter a valid Mobile No in the format 123." );
document.StudentRegistration.mobileno.focus() ;
return false;
} 
   if ( ( StudentRegistration.sex[0].checked == false ) && ( StudentRegistration.sex[1].checked == false ) )
   {
   alert ( "Choose your Gender: Male or Female" );
   return false;
   }       
   return( true ); 
}