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
        alert("Success!Message received");
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

$(document).ready(function(){
    $(".image1").click(function(){
    $(".ourWork1").toggle();
    })
    $(".image2").click(function(){
        $(".ourWork2").toggle();
    })
    $(".image3").click(function(){
    $(".ourWork3").toggle();
    })
})