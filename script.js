let userid=1;
const users=[];
localStorage.setItem("registeredEmails", JSON.stringify(["alekhya@gmail.com", "nishi@gmail.com"]));
function clearErrors(){

    errors = document.getElementsByClassName('Error');
    for(let item of errors)
    {
        item.innerHTML = "";
    }


}
function seterror(id, error){
    
    element = document.getElementById(id);
    element.getElementsByClassName('Error')[0].innerHTML = error;

}

function validateForm(){
    var returnval = true;
    clearErrors();

    
    var name = document.forms['myForm']["fname"].value;
    if (name.length<2){
        seterror("name", "*Please specify valid name");
        returnval = false;
    }
    var email = document.forms['myForm']["femail"].value;

    var password = document.forms['myForm']["fpass"].value;
    if (password.length < 6){
        seterror("pass", "*Password should be atleast 6 characters long!");
        returnval = false;
    }
    if (password.search(/[A-Z]/) < 0) {
        seterror("pass","*Your password must contain at least one upper case letter");
        returvnal=false; 
    }

    if (password.search(/[0-9]/) < 0) {
        seterror("pass","Your password must contain at least one digit");
        returnval=false;
    }
   if (password.search(/[!@#\$%\^&\*_]/) < 0) {
        seterror("pass","Your password must contain at least special character");
        returnval=false; 
    }
    if(password==email)
    {
        seterror("pass","Password Cannot be email");
        returnval=false;
    }

    var cpassword = document.forms['myForm']["fcpass"].value;
    if (cpassword != password){
        seterror("cpass", "*Password and Confirm password should match!");
        returnval = false;
    }

    return returnval;
}
const newUser = {
    id: userid,
    name: name.value,
    email: email.value,
    password: password.value
};
users.push(newUser);
localStorage.setItem("users", JSON.stringify(users));
userid++;

