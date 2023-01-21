function validateForm() {
    returnval = true;

    var user = document.getElementById("fname").value;
    if (user == "") {
        document.getElementById("UserId").innerHTML = "Please fill out the username";
        returnval = false;
    } else {
        sessionStorage.setItem("username", user);
        document.getElementById("UserId").innerHTML = "";
    }

    var pass = document.getElementById('psw').value;
    if (pass == "") {
        document.getElementById("PassId").innerHTML = "Please fill out the password";
        returnval = false;
    } else {
        document.getElementById("PassId").innerHTML = "";
    }
    return returnval;
}


//<!-----------------Requirement9------------>
//<!----Todays date should be displayed at the navbar at before the INR.-->

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth();
var day = date.getDate();
var dt = `Date : ${day}/${month + 1}/${year}`;
document.getElementById("date").innerHTML = dt;