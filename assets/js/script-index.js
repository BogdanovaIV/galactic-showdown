// Add listener events in buttons after loading the page.
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-page") === "leaderboard") {
                openLeaderboardPage();
            } else {
                // Select all input elements and elements with class "custom-class"
                let sides = document.querySelectorAll("input[type='radio']:checked");
                openGamePage(this.getAttribute("data-page"), sides[0].getAttribute("value"));
            }
        });
    }
});

// Functions to open pages

function openLeaderboardPage() {
    window.location.href = "leaderboard.html?type=only-show";
}

function openGamePage(parameterMap, parameterSide) {
    window.location.href = `game.html?map=${parameterMap}&side=${parameterSide}`;
}