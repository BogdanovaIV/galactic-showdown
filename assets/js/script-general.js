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