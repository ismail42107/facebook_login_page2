

function fb() {
    // let myname = "ismail";
    let myemail = "mian42107@gmail.com";
    let mypassword = "ismail14010";

    inputemail = document.querySelector(".input11").value;
    inputpassword = document.querySelector("#ee").value;
    
    

    if (inputemail == myemail) {

        if (inputpassword == mypassword) {
            document.querySelector("#q3").innerHTML = "You entered email" + " " + inputemail;
            document.querySelector("#q4").innerHTML = "And password" + " " + inputpassword;
            
        }
        else {
            document.querySelector("#q3").innerHTML = "You entered wrong password"+ " " + inputpassword;
            document.querySelector("#q4").innerHTML = " ";
        }
    }


    else {
        document.querySelector("#q3").innerHTML = "You entered wrong email"+ " " + inputemail;
        document.querySelector("#q4").innerHTML = " ";
    }
    

    
        aa()
    }
    
    function aa(){
       var inputemail = document.querySelector(".input11").value;
       var inputpassword = document.querySelector("#ee").value;
    
    localStorage.setItem(inputemail, inputpassword);
    }
    











// if (inputpassword == mypassword && inputemail == myemail) {
//     document.querySelector("#q3").innerHTML = "You enter email" + " " + myemail;
//     document.querySelector("#q4").innerHTML = "You enter password" + " " + mypassword;
// }

// else {
//     document.querySelector("#q3").innerHTML = "You enter wrong email";
//     document.querySelector("#q4").innerHTML = " ";
// }