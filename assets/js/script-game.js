let numberUserShips = 50;
let userShips = [];

let numberEnemyShips = 50;
let enemyShips = [];

let lifeShips = 0;

let userSide;

let shipsPositions = [];
let screenExpansionFactor = 2;
let lengthShip = 50; //Set equal width class "ship"  

// Add listener events to set images before they load.
document.addEventListener("readystatechange", function () {
    if (document.readyState === "interactive") {
        const params = getQueryParams();
        // Set map
        if (params.hasOwnProperty("map")) {
            let bodyTeg = document.getElementsByTagName("body")[0];
            bodyTeg.className = params["map"];
        }
        //Set user and enemy side
        if (params.hasOwnProperty("side")) {
            //User side
            userSide = params["side"];
            fillParametersForSide("user-side", params["side"]);
            //Enemy side
            fillParametersForSide("enemy-side", getEnemySide(params["side"]));
        }
    }
});

document.addEventListener("DOMContentLoaded", function () {
    //Create all ships in advance to avoid collision
    let sum = numberUserShips + numberEnemyShips;
    for (let i = 0; i < sum; i++) {
        createShip();
        lifeShips++;
    }

    document.getElementsByClassName("leaderboard")[0].addEventListener("click", function () {
        openLeaderboardPage();
    });
});

/**
 * Change top position and remove element that is outside the range
 * the returned dictionary with parameters of location-url 
 */
function changeTopPosition() {
    //Go down "top"
    let currentTop = parseInt(this.style.top);
    this.style.top = (currentTop + 1) + 'px';
    //Check "top" and remove element that is outside the range 
    if (parseInt(this.style.top) > window.screen.height) {
        clearInterval(this.intervalId);
        this.remove();
        //Show user score
        lifeShips--;
        showResult();
    }
}

/**
 * Check overlap position of ships
 * the returned boolean
 */
function checkOverlap(newShip) {
    for (let position of shipsPositions) {
        if (
            newShip.left < position.right &&
            newShip.right > position.left &&
            newShip.top < position.bottom &&
            newShip.bottom > position.top
        ) {
            return true;
        }
    }
    return false;
}

/**
 * Create ship button and add it in body
 */
function createShip() {
    let typeShip;

    //Get random side
    if (numberUserShips === 0) {
        typeShip = 2;
    } else if (numberEnemyShips === 0) {
        typeShip = 1;
    } else {
        typeShip = Math.random() > 0.5 ? 2 : 1;
    }

    //Get random ship
    let classShip;
    let idName;
    if (typeShip === 1) {
        idName = "light-side" + numberUserShips--;
        classShip = userShips[getRandomInt(0, userShips.length)];
        
    } else {
        idName = "dark-side" + numberEnemyShips--;
        classShip = enemyShips[getRandomInt(0, enemyShips.length)];
    }

    let ship;
    let top, left;

    // Ensure no overlap
    let overlap;
    do {
        overlap = false;
        top = -getRandomInt(0, window.screen.height * screenExpansionFactor);
        left = getRandomInt(0, window.screen.width - lengthShip);
        ship = {
            top: top,
            left: left,
            bottom: top + lengthShip,
            right: left + lengthShip
        };
        overlap = checkOverlap(ship, shipsPositions);
    } while (overlap);

    // Save the position of the new ship
    shipsPositions.push(ship);

    //Create ship
    let shipButton = document.createElement("button");
    shipButton.className = "ship " + classShip;
    shipButton.id = idName;
    shipButton.style.top = top.toString() + "px";
    shipButton.style.left = left.toString() + "px";
    //Add the event that changes position
    shipButton.intervalId = setInterval(function () {
        changeTopPosition.call(shipButton);
    }, 50);

    // Add element in body
    let gameBody = document.getElementsByClassName("game-body")[0];
    gameBody.appendChild(shipButton);

    //Add shoot ship
    document.getElementById(idName).addEventListener("click", function () {
        let idScore = "enemy-score";
        if (this.id.includes(userSide)) {
            idScore = "user-score";
        }
        calculateScore(idScore);
        //Remove element
        clearInterval(this.intervalId);
        this.remove();
        //Show user score
        lifeShips--;
        showResult();
    });
}

/**
 * Calculate score and remove element 
 */
function calculateScore(idScore) {
    let oldScore = parseInt(document.getElementById(idScore).innerText);
    document.getElementById(idScore).innerText = ++oldScore;
}

/**
 * Return enemy side
 */
function getEnemySide(sideName) {
    return sideName === "light-side" ? "dark-side" : "light-side";
}

/**
 * Create array with value of attributes: src, alt for sides
 * the returned array with attributes 
 */
function getParametersImageSideByName(sideName) {
    if (sideName === "light-side") {
        return ["./assets/images/yoda.webp", "Your side is the Light."];
    }

    return ["/assets/images/darth-vader.webp", "Your side is the Dark."];
}

/**
 * Fill ships for side by side name: 
 */
function fillShips(sideName, ships) {
    if (sideName === "light-side") {
        ships.push("x-wing");
        ships.push("millennium-falcon");
    } else {
        ships.push("star-destroyer");
        ships.push("starfighter");
        ships.push("starkiller");
    }
}

/**
 * Fill parameters for side by id: 
 * image side 
 */
function fillParametersForSide(id, sideName) {
    let side = document.getElementById(id);
    let imageSide = side.children[0];
    let parametersImageSide = getParametersImageSideByName(sideName);
    imageSide.src = parametersImageSide[0];
    imageSide.alt = parametersImageSide[1];

    if (sideName === "light-side") {
        fillShips(sideName, userShips);
    } else {
        fillShips(sideName, enemyShips);
    }
}

/**
 * Show user score and button to save this score in leaderboard
 * image side 
 */
function showResult() {
    if (lifeShips === 0) {
        document.getElementsByClassName("game-over")[0].className = "game-over";
        let userScore = parseInt(document.getElementById("user-score").innerText);
        let enemyScore = parseInt(document.getElementById("enemy-score").innerText);
        document.getElementById("total-score").innerText = enemyScore - userScore;
    }
}

/**
 * Open leaderboard with score in the current window 
 */
function openLeaderboardPage() {
    window.location.href = `leaderboard.html?type=add-user&score=${document.getElementById("total-score").innerText}`;
}