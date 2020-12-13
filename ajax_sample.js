console.log("Hi!");
$(document).ready(function(){
    console.log("document ready");

    //execute function loadDoc when the button is clicked
    $('#json_button').click(loadDoc);
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
                    let musicObj = JSON.parse(xhttp.responseText);
                    console.log(`music object is: ${musicObj}`);
                    // document.getElementById("demo").innerHTML = musicObj.music_pieces[0].composer;
                    
                    document.getElementById("table").style.opacity=1;
                    //call the following function that populates the table:
                    populateTable(musicObj);
                }
                else {
                    console.log("Progress = ", xhttp.readyState);
                }
            };
            xhttp.open("GET", "https://ichervachidze.github.io/docs/music_pieces.json", true);
            xhttp.send();
    }

    function populateTable(musicObj){
        // let column_headers = ["piece", "key", "opus", "composer", "year", "period"];
        const childrenTable = document.getElementById("music_table").children;
        console.log(`number of rows: ${childrenTable.length}`);
        console.log(childrenTable);
        for(let row = 0; row < childrenTable.length; row++){
            columns = childrenTable[row].children;
            console.log(`number of columns: ${columns.length}`);
            columns[0].innerHTML = musicObj.music_pieces[row].piece;
            columns[1].innerHTML = musicObj.music_pieces[row].key;
            columns[2].innerHTML = musicObj.music_pieces[row].opus;
            columns[3].innerHTML = musicObj.music_pieces[row].composer;
            columns[4].innerHTML = musicObj.music_pieces[row].year;
            columns[5].innerHTML = musicObj.music_pieces[row].period;
            }
        }