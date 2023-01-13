$(document).ready(function() {
    $('#alertMessage').hide();
  });

 function auth() {
    // document.getElementById("bgCarrousel").style.backgroundImage = url('../images/bg.jpg');
let username = document.getElementById("InputUsername").value ;
let password = document.getElementById("InputPassword").value ;
if (username === ""){
    document.getElementById("message").innerHTML = " Username is missing!";
    $('#alertMessage').show();
} else if (password === ""){
    document.getElementById("message").innerHTML = " Password is missing!";
    $('#alertMessage').show();
} else {
    $('#alertMessage').hide();
    window.location.href="/home.html"
}

}
function signUp() {
    let name = document.getElementById("inputName").value ;
    let email = document.getElementById("inputEmailId").value ;
    let password = document.getElementById("inputPassword").value ;
    let retryPassword = document.getElementById("inputRetryPassword").value ;
    if (name === ""){
        document.getElementById("messageErreur").innerHTML = " Name is missing!";
        $('#alertMessage').show();
    } else if (email === ""){
        document.getElementById("messageErreur").innerHTML = " Email is missing!";
        $('#alertMessage').show();
    } else if  (password === ""){ 
        document.getElementById("messageErreur").innerHTML = " Password is missing!";
        $('#alertMessage').show();
    } else if (retryPassword === ""){
        document.getElementById("messageErreur").innerHTML = " Password Cofirmation is missing!";
        $('#alertMessage').show();
    } else if (! email.includes("@")){
    document.getElementById("messageErreur").innerHTML = " invalid Email!";
    }  else if (password !== retryPassword ) {
        document.getElementById("messageErreur").innerHTML = " Wrong Password Confirmation!";
    } else {
        $('#alertMessage').hide();
        window.location.href="/home.html"
    }


    
};