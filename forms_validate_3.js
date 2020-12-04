window.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM loaded and parsed");
    
    document.getElementById("assignmentForm").addEventListener("submit", function(event){
        event.preventDefault();

        var firstNameFlag = false;
        var lastNameFlag = false;
        var facilitatorFlag = false;
        var regexName = /[A-Za-z]{2}/;
        var regexFacilitator = /(Fazil|Josh|Chris)/;

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

        //validate facilitator
        var facilitator = document.getElementById("facilitator");
        if (validateName(regexFacilitator, facilitator.value)){
            document.getElementById("errorC").innerHTML = "";
            facilitatorFlag = true;
        }
        else{
            document.getElementById("errorC").innerHTML = "Invalid entry. Please enter a valid facilitator name";
        }

        //if input is invalid, prevent the form from submitting
        if (firstNameFlag == false || 
            lastNameFlag == false || 
            facilitatorFlag == false){
            // event.preventDefault();
        }

        if (firstNameFlag == true || 
            lastNameFlag == true || 
            facilitatorFlag == true){
                // event.preventDefault();
                document.getElementById("thanks").innerHTML = 
                "Success! Thank you for filling out the form!";
            }
    });

});
