window.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM loaded and parsed");

    // $("#card-one").mouseleave(function(){
    //   console.log("inside fading function");
      
    //   // $("#navbar").fadeOut(500);
    //   // $("#web-title").fadeOut(500);
    //   $("#menu").fadeOut();

    // });

    // $("#card-one").mouseenter(function(){
    //   console.log("inside emerging function")
      
    //   $("#navbar").fadeIn(500);
    //   $("#web-title").fadeIn(500);
    //   // $("#menu").fadeOut(500);

    // });

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }

document.getElementById("navbar").addEventListener("click", function() {
   
    console.log("navbar clicked");
    
    const children = document.getElementById("menu").children;
    console.log("found children");
    //     for (const child of children) {
    //     console.log(child.innerText);
    //     child.style.opacity = 0;
    // }
    // document.getElementById("menu").style.display = "block";

    for (const child of children) {
        console.log("showing: " + child.innerText);
        child.style.opacity = 1;
        // sleep(0);
    }

    });



});