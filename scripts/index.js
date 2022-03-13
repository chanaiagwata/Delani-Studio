var userName = document.getElementById("nameInput");
var userEmail = document.getElementById("emailInput");
var userMessage = document.getElementById("textInput");
var submit = document.getElementById("btn");


function formValidate(){
    if(userName.value==""){
        alert("Enter your name");
    }
    else if(userEmail.value=="" || null){
        alert("Enter your email");
    }
    else if(userMessage.value==""){
        alert("Leave a message");
    }
    else{
        alert("Success!");
    }
}
function clearing(){
    document.getElementById("formInput").reset();
}

submit.addEventListener("click", function(e){
    e.preventDefault();
    formValidate();
    clearing();
})
