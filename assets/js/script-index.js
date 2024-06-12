/* jshint esversion: 11, sub:true */

// Inner scripts
import {
    openPage,
    addGeneralListeners
} from "./script-general.js";


// Add listener events in buttons after loading the page.
document.addEventListener("DOMContentLoaded", function () {
    addGeneralListeners();

    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
        addListenerForButton(button);
    }
    const gameRulesLink = document.getElementById("game-rules-link");
    gameRulesLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action (navigation)
        const volume = document.getElementById("volume");
        window.location.href = `game-rules.html?volume=${volume.checked}`;
    });
});

/**
 * Add listener in button 
 * Use the "data-page" attribute to choose function
 */
function addListenerForButton(button){
    if (button.getAttribute("data-page") === "leaderboard") {
        button.addEventListener("click", function () {
            openPage("leaderboard.html", {
                "type": "only-show"
            });
        });
    } else {
        // Select all input elements and elements with class "custom-class"
        button.addEventListener("click", function () {
            const sides = document.querySelectorAll("input[type='radio']:checked");
            openPage("game.html", {
                "game-map": this.getAttribute("data-page"),
                "side": sides[0].getAttribute("value")
            });
        });
    }
}