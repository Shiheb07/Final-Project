$(document).ready(function() {
    $('#alertMessage').hide();
  });

 function auth() {
    // document.getElementById("bgCarrousel").style.backgroundImage = url('../images/bg.jpg');
let username = document.getElementById("InputUsername").value ;
let password = document.getElementById("InputPassword").value ;
if (username === ""){
    document.getElementById("message").innerHTML = "Username is missing!";
    $('#alertMessage').show();
} else if (password === ""){
    document.getElementById("message").innerHTML = "Password is missing!";
    $('#alertMessage').show();
} else {
    $('#alertMessage').hide();
}

}
function signUp() {
    let name = document.getElementById("inputName").value ;
    let email = document.getElementById("inputEmailId").value ;
    let password = document.getElementById("inputPassword").value ;
    let retryPassword = document.getElementById("inputRetryPassword").value ;

};