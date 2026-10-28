console.log("script.js loaded");

let buttons = document.querySelectorAll("#mood-buttons button");
buttons.forEach(function(button) {
    button.addEventListener("click" , function() {
        let emoji = button.textContent;
        let output = document.getElementById("output-message");
        console.log ("button clicked!");
    })
})
