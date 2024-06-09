// Inner scripts
import {
    openLeaderboardPage,
    addGeneralListeners
} from "./script-general.js";


// Add listener events in buttons after loading the page.
document.addEventListener("DOMContentLoaded", function () {
    addGeneralListeners();

    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-page") === "leaderboard") {
                openLeaderboardPage("only-show");
            } else {
                // Select all input elements and elements with class "custom-class"
                const sides = document.querySelectorAll("input[type='radio']:checked");
                const volume = document.getElementById("volume");
                openGamePage(this.getAttribute("data-page"), sides[0].getAttribute("value"), volume.checked);
            }
        });
    }
    const gameRulesLink = document.getElementById("game-rules-link");
    gameRulesLink.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent the default action (navigation)
        const volume = document.getElementById("volume");
        window.location.href = `game-rules.html?volume=${volume.checked}`;
    });
});

// Functions to open pages

function openGamePage(parameterMap, parameterSide, volume) {
    window.location.href = `game.html?map=${parameterMap}&side=${parameterSide}&volume=${volume}`;
}