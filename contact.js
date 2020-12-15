window.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM loaded and parsed");

    document.getElementById("projectRef").addEventListener("mouseenter", function(){
        console.log("inside mouseenter function");
        document.getElementById("submenu").style.display = "block";
    });

    document.getElementById("submenu").addEventListener("mouseleave", function(){
        console.log("inside mouseleave function");
        document.getElementById("submenu").style.display = "none";
    });
    
    document.getElementById("contactForm").addEventListener("submit", function(event){
        event.preventDefault();

        var firstNameFlag = false;
        var lastNameFlag = false;
        var emailFlag = false;
        var regexName = /[A-Za-z]{2}/;
        var regexEmail = /[^@]+@[^@]+/;

        function validateName(regex, name){
            return regex.test(name);
        }

        //validate first name
        var firstName = document.getElementById("firstName");
        if (validateName(regexName, firstName.value)){
            document.getElementById("errorA").innerHTML = "";
            firstNameFlag = true;
        }
        else {
            document.getElementById("errorA").innerHTML = "Invalid entry. Please enter a name at least 2 characters long";
        }

        //validate last name
        var lastName = document.getElementById("lastName");
        if (validateName(regexName, lastName.value)){
            document.getElementById("errorB").innerHTML = "";
            lastNameFlag = true;
        }
        else{
            document.getElementById("errorB").innerHTML = "Invalid entry. Please enter a name at least 2 characters long";
        }

        
        //validate email
        var email = document.getElementById("email");
        if (validateName(regexEmail, email.value)){
            console.log("checking email");
            document.getElementById("errorC").innerHTML = "";
            emailFlag = true;
        }
        else{
            document.getElementById("errorC").innerHTML = "Invalid entry. Please enter a valid email";
        }

        //if input is invalid, prevent the form from submitting
        
        if (firstNameFlag == true && 
            lastNameFlag == true && 
            emailFlag == true){
                document.getElementById("thanks").innerHTML = 
                "Success! Thank you for filling out the form!";
            }
    });

});
