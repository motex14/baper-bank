document.getElementById('login-submit').addEventListener
('click',function(){
    const emailfield =document.getElementById('user-email');
    const useremail =emailfield.value;
  
    
    
    // get user password
   const passwordfield =document.getElementById('user-password');
   const userPassword =passwordfield.value;
   if(useremail=='motex@gmail.com' &&userPassword=='248052'){
       window.location.href='index.html'

    
   };
     
    });
   // handale deposite button
   document.getElementById('deposit-button').addEventListener('click',function(){
    console.log('hey why you want to deposite')
    
})


