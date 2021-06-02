function validateForm() {

   if( document.myform.Name.value == "" ) {
      alert( "Please provide your name!" );
      document.myform.Name.focus() ;
      return false;
   }

   if( document.myform.Email.value == "") {
      alert( "Please provide your Email!" );
      document.myform.Email.focus() ;
      return false;
   }

   if( document.myform.password.value == "") {
   alert( "Please provide your password!" );
   document.myform.password.focus() ;
   return false;
   }

   if( document.myform.tel.value == "") {
      alert( "Please provide Number!" );
      document.myform.tel.focus() ;
      return false;
   }

   if( document.myform.URL.value == "") {
      alert( "Please myformprovide your URL!" );
      document.myform.URL.focus() ;
      return false;
   }

alert("Submit Successfully");
}
