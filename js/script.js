console.log("script.js loaded");

let buttons = document.querySelectorAll("#mood-buttons button");
let userAnswers = {}

buttons.forEach(function(button){
    button.addEventListener("click" , function() {
        buttons.forEach(function(btn) {
            btn.classList.remove("selected");
        });
        button.classList.add("selected");

        let buttonID = button.dataset.buttonid;
        let mood = button.dataset.mood;
        userAnswers[buttonID] = mood;
        console.log(userAnswers);

        let output = document.getElementById("output-message");

        if (mood === "happy") {
            output.textContent = "Yay! Glad your feeling happy today 🎉";
        } else if (mood === "tired") {
            output.textContent = "Take it easy-you've earned some rest 😴";
        } else if (mood === "angry") {
            output.textContent = "Deep breaths. Tomorrow is a new day 😤";
        } else if (mood === "confused") {
            output.textContent = "Confusion is a sign of growth 🤔";
        }
    })
})
