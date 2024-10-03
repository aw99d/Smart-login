

var nameInput = document.querySelector("#nameInput");
var emailInput = document.querySelector("#emailInput");
var passInput = document.querySelector("#passInput");
var signUp = document.querySelector("#signUp")
var nameValid = document.querySelector(".nameValid ")
var emailValid = document.querySelector(".emailValid ")
var passValid = document.querySelector(".passValid")
var success = document.querySelector(".success")
var already = document.querySelector(".already")

var allUser = JSON.parse(localStorage.getItem(allUser)) || []




signUp.addEventListener("click" , function(a){
    a.preventDefault()
    
    if(checkInputs()){
        addUser()
    }
      
})


function addUser(){
    var newUser = {
        nameInput: nameInput.value,
        email: emailInput.value,
        pass: passInput.value
    }
   if(userAlreadySign(newUser) == true){
    already.classList.replace("d-none", "d-block")
   }else{
    already.classList.replace("d-block", "d-none")
    window.location.href="../lgin up/index.html"
    allUser.push(newUser)
    localStorage.setItem("allUser",JSON.stringify(allUser))
   }
    
}


function userAlreadySign(newUser){
    for(var i = 0 ; i<allUser.length; i++){
        if(allUser[i].emailInput.toLowerCase() == newUser.emailInput.toLowerCase() ){
            already.classList.replace("d-none", "d-block")

  return true


        }
    }
}


function validInput(regex,element,alerts){
var value =regex
if(value.test(element.value)){

    alerts.classList.replace("d-block" , "d-none")
    return true
    
}else{
    alerts.classList.replace("d-none" , "d-block")
    return false
    
}


}


function checkInputs(){
    if(


        validInput(/^[a-z0-9_-]{3,15}$/,nameInput,nameValid) == true &&
        validInput(/^[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,emailInput,emailValid) == true &&
        validInput(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/,passInput,passValid)

    ){

 success.classList.replace("d-none", "d-block")
 return true


    }else{

       
 success.classList.replace("d-block", "d-none")
 return false
    }
}




