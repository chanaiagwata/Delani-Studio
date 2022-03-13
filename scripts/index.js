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

$(document).ready(function () {
    $(".image1").click(function () {
        $(".ourWork1").toggle();
    })
    $(".image2").click(function () {
        $(".ourWork2").toggle();
    })
    $(".image3").click(function () {
        $(".ourWork3").toggle();
    })
    // hover effect on portfolio
    $("#project1").mouseenter(function () {
        $('.project-heading').filter("#project1-header").show("slow");
    }).mouseleave(function () {
        $('#project1-header').hide("slow")
    });

    $("#project2").mouseenter(function () {
        $(".project-heading").filter("#project2-header").show('slow');
    }).mouseleave(function () {
        $("#project2-header").hide('slow')
    });
    $("#project3").mouseenter(function () {
        $('.project-heading').filter("#project3-header").show("slow");
    }).mouseleave(function () {
        $('#project3-header').hide("slow")
    });
    $("#project4").mouseenter(function () {
        $('.project-heading').filter("#project4-header").show("slow");
    }).mouseleave(function () {
        $('#project4-header').hide("slow")
    });
    $("#project5").mouseenter(function () {
        $('.project-heading').filter('#project5-header').show("slow");
    }).mouseleave(function () {
        $('#project5-header').hide("slow")
    });
    $("#project6").mouseenter(function () {
        $('.project-heading').filter('#project6-header').show("slow");
    }).mouseleave(function () {
        $('#project6-header').hide("slow")
    });
    $("#project7").mouseenter(function () {
        $('.project-heading').filter('#project7-header').show("slow");
    }).mouseleave(function () {
        $('#project7-header').hide("slow")
    });
    $("#project8").mouseenter(function () {
        $('.project-heading').filter('#project8-header').show("slow");
    }).mouseleave(function () {
        $('#project8-header').hide("slow")
    });
})
