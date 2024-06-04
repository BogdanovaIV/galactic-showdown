// Add listener events in buttons after loading the page.
document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.getElementsByTagName("button");

    for (const button of buttons) {
        button.addEventListener("click", function () {
            if (this.getAttribute("data-page") === "leaderboard") {
                openLeaderboardPage();
            } else {
                // Select all input elements and elements with class "custom-class"
                const sides = document.querySelectorAll("input[type='radio']:checked");
                const volume = document.getElementById("volume");
                openGamePage(this.getAttribute("data-page"), sides[0].getAttribute("value"), volume.checked);
            }
        });
    }
});

// Functions to open pages

function openLeaderboardPage() {
    window.location.href = "leaderboard.html?type=only-show";
}

function openGamePage(parameterMap, parameterSide, volume) {
    window.location.href = `game.html?map=${parameterMap}&side=${parameterSide}&volume=${volume}`;
}