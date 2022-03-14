function validate() {
    let gender = document.bitcsform.gender;
    let role = document.bitcsform.role;
    let perm = document.bitcsform.perm;
    
    let element =document.getElementById('password');
    validatepassword(element.value);
    if (password.value.length < 6) {

        alert("invalide password");
        return false;
    }
    if (gender.value == "select") {
        alert("select gender");
        return false;
    }

    if (role.value=="") {
        alert("select Role");
        return false;
    }
    var count = 0;
    for (let i = 0; i <= perm.length - 1; i++) {
        if (perm[i].checked) {
            count += 1;
        }
    }
    if (count < 2) {
        alert("Give atleast two permissions ");
        return false;
    }
    
    return true;   
}



function validateEmail(id){
    let element =document.getElementById(id);
    let regExp=/^([a-zA-Z0-9._]+)@([a-zA-Z]+)\.[a-zA-Z]{2,3}$/;
    if(!regExp.test(element.value)){
        alert("invalid email");
        return false;

    }
    return true;
}

function validatepassword(element){
     var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    
        if(element.match(passw)){
         
           return true;
        } 
        else{
            alert("invalid password");
            return false;
        }
   
}

function myfunction(el){
    el.preventDefault()
    let isValide = validate();
    if(isValide){
        document.bitcsform.submit.value = 'Confirm';

    } else{
        alert('Form is not Valid');
        
    }

}
