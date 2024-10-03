var userName = localStorage.getItem("userName")
var nameUser = document.querySelector("#nameUser")
var logOutBtn = document.querySelector("#logOutBtn")







nameUser.innerHTML = userName



logOutBtn.addEventListener("click", function(){
    localStorage.removeItem("userName")
})