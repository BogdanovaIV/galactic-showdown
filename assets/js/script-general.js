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

//The mechanism of encrypt and decrypt the number

/**
 * Create Substitution Map and Reverse Substitution Map.
 * Using a simple substitution cipher, where each digit (0-9) is replaced by another digit according to a predefined mapping.
 * Return array with substitutionMap and reverseSubstitutionMap
 */
function substitutionMaps() {
    const substitutionMap = {
        0: 7,
        1: 4,
        2: 9,
        3: 2,
        4: 6,
        5: 1,
        6: 8,
        7: 0,
        8: 5,
        9: 3
    };
    const reverseSubstitutionMap = {
        7: 0,
        4: 1,
        9: 2,
        2: 3,
        6: 4,
        1: 5,
        8: 6,
        0: 7,
        5: 8,
        3: 9
    };
    const maps = [substitutionMap, reverseSubstitutionMap];
    return maps;
}

/**
 * Encrypt the number.
 * Return encrypted number
 */
function encrypt(number, numberDigits) {
    let numberStr = number.toString().padStart(numberDigits, '0'); // Pad the number to ensure it has three digits
    let encryptedStr = '';
    const maps = substitutionMaps();
    const substitutionMap = maps[0];
    for (let i = 0; i < numberStr.length; i++) {
        let digit = parseInt(numberStr[i]);
        // Rotate the digit by its position (i)
        let rotatedDigit = (digit + i) % 10;
        // Substitute the digit
        let encryptedDigit = substitutionMap[rotatedDigit];
        encryptedStr += encryptedDigit.toString();
    }

    return encryptedStr;
}

/**
 * Decrypt the number.
 * Return decrypted number
 */
function decrypt(encryptedNumber, numberDigits) {
    let encryptedStr = encryptedNumber.toString().padStart(numberDigits, '0'); // Pad the encrypted number to ensure it has three digits
    let decryptedStr = '';
    const maps = substitutionMaps();
    const reverseSubstitutionMap = maps[1];

    for (let i = 0; i < encryptedStr.length; i++) {
        let digit = parseInt(encryptedStr[i]);
        // Reverse substitute the digit
        let substitutedDigit = reverseSubstitutionMap[digit];
        // Reverse the rotation
        let originalDigit = (substitutedDigit - i + 10) % 10;
        decryptedStr += originalDigit.toString();
    }

    return parseInt(decryptedStr, 10); // Convert the decrypted string back to a number to cut extra zeros
}