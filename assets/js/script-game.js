// Add listener events to set images before they load.
document.addEventListener("readystatechange", function () {
    console.log(document.readyState);
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
            fillParametersForSide("user-side", params["side"]);

            //Enemy side
            fillParametersForSide("enemy-side", getEnemySide(params["side"]));
        }
    }
});


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
 * Return enemy side
 */
function getEnemySide(sideName) {
    return sideName === "light-side" ? "dark-side" : "light-side";
}


/**
 * Create array with value of attributes: src, alt for sides
 * the returned array with attributes 
 */
function getParametersImageSideByName(name) {
    if (name === "light-side") {
        return ["./assets/images/yoda.webp", "Your side is the Light."];
    }

    return ["/assets/images/darth-vader.webp", "Your side is the Dark."];
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
}