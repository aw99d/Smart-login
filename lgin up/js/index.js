var loginUp = document.querySelector("#loginUp") 
var emailInput = document.querySelector("#emailInput")
var passInput = document.querySelector("#passInput")
var  alertLogin = document.querySelector("#alertLogin")

  
 var allUser = [];
 if(localStorage.getItem("allUser")!=null){

    allUser = JSON.parse(localStorage.getItem("allUser"))
 }


console.log(allUser);



 loginUp.addEventListener("click", function(a){
    a.preventDefault()
  login()
  
    
 })



 function login(){


    var userDate = {
        email: emailInput.value,
        pass: passInput.value,
    }
    if(validLogin(userDate) == true){
        alertLogin.classList.replace("d-block" , "d-none")
        window.location.href= "../home/index.html" 
        
        
    }else{
       alertLogin.classList.replace("d-none" , "d-block")
        
    }
 }



 function validLogin(userDate){
     for(var i = 0 ; i < allUser.length; i++){
       if( allUser[i].email.toLowerCase() == userDate.email.toLowerCase() && allUser[i].pass == userDate.pass ){
        
        localStorage.setItem("userName",allUser[i].nameInput)
        return true
        
       }

     }
    
 }