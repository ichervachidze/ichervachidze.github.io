window.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM loaded and parsed");

document.getElementById("wrapper").addEventListener("mouseenter", function() {
    document.getElementById("circle").style.opacity = 0.6;
});

document.getElementById("top").addEventListener("mouseenter", function() {
    document.getElementById("circle").style.opacity = 0;
});

document.getElementById("json_button").addEventListener("click", loadDoc);

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

// document.getElementById("navbar").addEventListener("click", function() {
   
//     console.log("navbar clicked");
    
//     const children = document.getElementById("menu").children;
//     console.log("found children");
//         for (const child of children) {
//         console.log(child.innerText);
//         child.style.opacity = 0;
//     }
//     document.getElementById("menu").style.display = "block";

//     for (const child of children) {
//         console.log("showing: " + child.innerText);
//         child.style.opacity = 1;
//         sleep(0);
//     }

//     });
// document.getElementById("top").addEventListener("wheel", function() {
//     document.getElementById("menu").style.display = "none";
//     });

});

function loadDoc(){
        console.log("button clicked");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function(){
            
            //do the following only if the request is successful
            if (this.readyState == 4 && this.status == 200){
                console.log("request finished");
                
                //create an object containing parsed jason string
                console.log(xhttp.responseText);
                let wordsObj = JSON.parse(xhttp.responseText);
                console.log(`words object is: ${wordsObj}`);
                console.log(`length of word groups: ${wordsObj.length}`)
               
                //call the following function that creates and populates the table:
                populateTable(wordsObj);
            }
            else {
                console.log("Progress = ", xhttp.readyState);
            }
        };
        xhttp.open("GET", "https://ichervachidze.github.io/docs/words.json", true);
        xhttp.send();
}

function populateTable(wordsObj){
    const title = ["words with -CH-", "words with -GU-", "words with -TURE", "words with -US"];
    console.log("inside populateTable function");
   

    //Create table header
    var theader = document.getElementById("table_header");
    var head_row = document.createElement("tr");
    theader.appendChild(head_row);

    //Get table body element
    var tbody = document.getElementById("table_body");


    //Populate table header
    for (let i=0; i<title.length; i++){
        let col = document.createElement("td");
        col.innerHTML = title[i];
        head_row.appendChild(col);
    }


    //Populate table body
    for (let j =0; j<wordsObj.us.length; j++){
        let table_row = document.createElement("tr");
        let col1 = document.createElement("td");
        let col2 = document.createElement("td");
        let col3 = document.createElement("td");
        let col4 = document.createElement("td");

        col1.innerHTML = wordsObj.ch[j];
        col2.innerHTML = wordsObj.gu[j];
        col3.innerHTML = wordsObj.ture[j];
        col4.innerHTML = wordsObj.us[j];

        tbody.appendChild(table_row);
        table_row.appendChild(col1);
        table_row.appendChild(col2);
        table_row.appendChild(col3);
        table_row.appendChild(col4);
    }

    }