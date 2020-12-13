window.addEventListener("DOMContentLoaded", () =>{
    console.log("DOM loaded and parsed");

document.getElementById("wrapper").addEventListener("mouseenter", function() {
    document.getElementById("circle").style.opacity = 0.6;
});

document.getElementById("top").addEventListener("mouseenter", function() {
    document.getElementById("circle").style.opacity = 0;
});

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
        for (const child of children) {
        console.log(child.innerText);
        child.style.opacity = 0;
    }
    document.getElementById("menu").style.display = "block";

    for (const child of children) {
        console.log("showing: " + child.innerText);
        child.style.opacity = 1;
        sleep(0);
    }

    });
document.getElementById("top").addEventListener("wheel", function() {
    document.getElementById("menu").style.display = "none";
});


});