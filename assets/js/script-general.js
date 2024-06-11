// Add listener events in buttons after loading the page.
export function addGeneralListeners() {
    const params = getQueryParams();
    //Set volume
    if (params.hasOwnProperty("volume")) {
        const volume = document.getElementById("volume");
        volume.checked = params["volume"] === "true" ? true : false;
    }

    const homeLink = document.getElementById("home-link");
    if (homeLink) {
        homeLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent the default action (navigation)
            openPage("index.html", {});
        });
    }
}

/**
 * Get random integer number ranging from min to max
 * the returned integer number 
 */
export function getRandomInt(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min - 1;
}

/**
 * Read parameters of location-url
 * the returned dictionary with parameters of location-url 
 */
export function getQueryParams() {
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
export function createPlayAudio(path) {
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
// Function after using obfuscator
function substitutionMaps() {
    const _0x3337a6 = {
            0x0: 0x7,
            0x1: 0x4,
            0x2: 0x9,
            0x3: 0x2,
            0x4: 0x6,
            0x5: 0x1,
            0x6: 0x8,
            0x7: 0x0,
            0x8: 0x5,
            0x9: 0x3
        },
        _0x56012c = {
            0x7: 0x0,
            0x4: 0x1,
            0x9: 0x2,
            0x2: 0x3,
            0x6: 0x4,
            0x1: 0x5,
            0x8: 0x6,
            0x0: 0x7,
            0x5: 0x8,
            0x3: 0x9
        },
        _0x23e3c3 = [_0x3337a6, _0x56012c];
    return _0x23e3c3;
}

/**
 * Function "encrypt"
 * Encrypt the number.
 * Return encrypted number
 */
// Function after using obfuscator
function _0x6308() {
    const _0x16a404 = ['1635277PleLYQ', 'length', '54624kHBHMr', '37890oqGpgv', '5786NIiart', '351eLWZbb', '4842555fFBLhB', '362700hNmliK', '291934LPWHlv', '6ijpdDe', '3OvFmta', 'toString', 'padStart', '212157NolMEj'];
    _0x6308 = function () {
        return _0x16a404;
    };
    return _0x6308();
}(function (_0x50b6c1, _0x5a6893) {
    const _0x2a76cf = _0x87af,
        _0x59c9a1 = _0x50b6c1();
    while (!![]) {
        try {
            const _0x2b98e3 = -parseInt(_0x2a76cf(0xe0)) / 0x1 + parseInt(_0x2a76cf(0xdb)) / 0x2 * (parseInt(_0x2a76cf(0xdd)) / 0x3) + parseInt(_0x2a76cf(0xda)) / 0x4 + parseInt(_0x2a76cf(0xd9)) / 0x5 * (-parseInt(_0x2a76cf(0xdc)) / 0x6) + -parseInt(_0x2a76cf(0xe1)) / 0x7 + parseInt(_0x2a76cf(0xd5)) / 0x8 * (-parseInt(_0x2a76cf(0xd8)) / 0x9) + parseInt(_0x2a76cf(0xd6)) / 0xa * (parseInt(_0x2a76cf(0xd7)) / 0xb);
            if (_0x2b98e3 === _0x5a6893) break;
            else _0x59c9a1['push'](_0x59c9a1['shift']());
        } catch (_0x4b13ef) {
            _0x59c9a1['push'](_0x59c9a1['shift']());
        }
    }
}(_0x6308, 0x860dd));
// Function after using obfuscator
function _0x87af(_0x54eb4b, _0x5991b1) {
    const _0x63088c = _0x6308();
    return _0x87af = function (_0x87af2c, _0x4dd3c8) {
        _0x87af2c = _0x87af2c - 0xd4;
        let _0x17e4a2 = _0x63088c[_0x87af2c];
        return _0x17e4a2;
    }, _0x87af(_0x54eb4b, _0x5991b1);
}
// Function after using obfuscator
export function encrypt(_0x58a6f8, _0x5806f3) {
    const _0xde8df0 = _0x87af;
    let _0x164f27 = _0x58a6f8[_0xde8df0(0xde)]()[_0xde8df0(0xdf)](_0x5806f3, '0'),
        _0x5a7962 = '';
    const _0x472c09 = substitutionMaps(),
        _0x24f917 = _0x472c09[0x0];
    for (let _0x260869 = 0x0; _0x260869 < _0x164f27[_0xde8df0(0xd4)]; _0x260869++) {
        let _0x4e2643 = parseInt(_0x164f27[_0x260869]),
            _0xfe8309 = (_0x4e2643 + _0x260869) % 0xa,
            _0x240f0a = _0x24f917[_0xfe8309];
        _0x5a7962 += _0x240f0a[_0xde8df0(0xde)]();
    }
    return _0x5a7962;
}

/**
 * Function "Decrypt"
 * Decrypt the number.
 * Return decrypted number
 */
// Function after using obfuscator
(function (_0x2a9d76, _0x63fd09) {
    const _0xefd0cd = _0x27bb,
        _0xef259c = _0x2a9d76();
    while (!![]) {
        try {
            const _0x17ce85 = -parseInt(_0xefd0cd(0xa5)) / 0x1 * (-parseInt(_0xefd0cd(0xa6)) / 0x2) + parseInt(_0xefd0cd(0xac)) / 0x3 + -parseInt(_0xefd0cd(0xa4)) / 0x4 + -parseInt(_0xefd0cd(0xab)) / 0x5 * (-parseInt(_0xefd0cd(0xaa)) / 0x6) + parseInt(_0xefd0cd(0xa8)) / 0x7 + parseInt(_0xefd0cd(0xa9)) / 0x8 * (parseInt(_0xefd0cd(0xa2)) / 0x9) + parseInt(_0xefd0cd(0xa7)) / 0xa * (-parseInt(_0xefd0cd(0xa0)) / 0xb);
            if (_0x17ce85 === _0x63fd09) break;
            else _0xef259c['push'](_0xef259c['shift']());
        } catch (_0x306711) {
            _0xef259c['push'](_0xef259c['shift']());
        }
    }
}(_0x5974, 0xce56e));
// Function after using obfuscator
function _0x27bb(_0x17feed, _0x382e4a) {
    const _0x59743b = _0x5974();
    return _0x27bb = function (_0x27bb7b, _0x14befe) {
        _0x27bb7b = _0x27bb7b - 0xa0;
        let _0x2d4c9e = _0x59743b[_0x27bb7b];
        return _0x2d4c9e;
    }, _0x27bb(_0x17feed, _0x382e4a);
}
// Function after using obfuscator
function _0x5974() {
    const _0x2770d9 = ['5830072csbVQk', '1513AFbYkP', '1674LPbwOo', '200ODvcYI', '5485018TlCqnV', '72ZTwUsh', '12zNtXij', '3246945dpMnLF', '4169751lFcGeG', 'toString', '1658096lKcMFr', 'padStart', '578754bBHnoP', 'length'];
    _0x5974 = function () {
        return _0x2770d9;
    };
    return _0x5974();
}
/**
 * Function "Decrypt"
 * Decrypt the number.
 * Return decrypted number
 */
// Function after using obfuscator
export function decrypt(_0x5f7ef5, _0x276b32) {
    const _0xe46cd8 = _0x27bb;
    let _0x389206 = _0x5f7ef5[_0xe46cd8(0xad)]()[_0xe46cd8(0xa1)](_0x276b32, '0'),
        _0x383a61 = '';
    const _0x320b43 = substitutionMaps(),
        _0x440a9e = _0x320b43[0x1];
    for (let _0x463dc8 = 0x0; _0x463dc8 < _0x389206[_0xe46cd8(0xa3)]; _0x463dc8++) {
        let _0x150561 = parseInt(_0x389206[_0x463dc8]),
            _0xc85aa2 = _0x440a9e[_0x150561],
            _0x875328 = (_0xc85aa2 - _0x463dc8 + 0xa) % 0xa;
        _0x383a61 += _0x875328[_0xe46cd8(0xad)]();
    }
    return parseInt(_0x383a61, 0xa);
}

/**
 * Add common parameters in the dictionary
 */
function addCommonParameters(params){
    params["volume"] = document.getElementById("volume").checked;
}

/**
 * Open the page with parameters
 */
export function openPage(pagName, params) {
    addCommonParameters(params);
    let hrefLocation = `${pagName}?`;
    let isFirst = true;
    for (const [key, value] of Object.entries(params)) {
        if (isFirst){
            isFirst = false;
        } else {
            hrefLocation += `&`;
        }
        hrefLocation += `${key}=${value}`;
    }
    window.location.href = hrefLocation;
}