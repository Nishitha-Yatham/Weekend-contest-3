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
 var email = document.forms['myForm']["femail"].value;
  const registeredEmails = JSON.parse(localStorage.getItem("registeredEmails"));
    if (registeredEmails.includes(email.value)) {
         returnval=true;
    } else {
        seterror("email","The email is not registered.");
        returnval=false;
    }
}
