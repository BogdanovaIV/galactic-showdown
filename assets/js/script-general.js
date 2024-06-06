// Add listener events in buttons after loading the page.
document.addEventListener("DOMContentLoaded", function () {

    const params = getQueryParams();
    console.log(params);
    //Set volume
    if (params.hasOwnProperty("volume")) {
        const volume = document.getElementById("volume");
        volume.checked = params["volume"] === "true" ? true : false;
    }

    const homeLink = document.getElementById("home-link");
    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default action (navigation)
            const volume = document.getElementById("volume");
            window.location.href = `index.html?volume=${volume.checked}`;
        });
    }
});

/**
 * Get random integer number ranging from min to max
 * the returned integer number 
 */
function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min - 1;
}

/**
 * Read parameters of location-url
 * the returned dictionary with parameters of location-url 
 */
function getQueryParams() {
    const params = new URLSearchParams(window.location.search);
    let queryParams = {};
    for (const [key, value] of params.entries()) {
        queryParams[key] = value;
    }
    return queryParams;
}

/**
 * Create audio and play it.
 * The parameter is the path to the sound file. 
 */
function CreatePlayAudio(path) {
    let sound = new Audio(path);
    sound.play().catch(function (error) {
        console.error('Error playing the sound:', error);
    });
}