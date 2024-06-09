//Google charts
google.charts.load("current", {
    "packages": ["corechart", "table"]
});

// Import the functions which need from the SDKs
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
    getFirestore,
    collection,
    doc,
    setDoc,
    getDocs,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Inner scripts
import {
    openLeaderboardPage,
    addGeneralListeners,
    getQueryParams,
    decrypt
} from "./script-general.js";

let dataTable;

// Database to store scores
const db = initializeDataBase();

// Add listener events before the page loads.
document.addEventListener("DOMContentLoaded", function () {
    addGeneralListeners();
    const params = getQueryParams();
    if (params.hasOwnProperty("type") && params["type"] === "add-user") {
        document.getElementsByClassName("user-score")[0].className = "user-score";
        document.getElementsByClassName("save-score")[0].className = "save-score";
    }
    if (params.hasOwnProperty("score")) {
        document.getElementById("total-score").innerText = decrypt(params["score"], 6);
    }
    document.getElementsByClassName("save")[0].addEventListener("click", function () {
        addScore(document.getElementById("user-name").value, document.getElementById("total-score").innerText);
    });

});

/**
 * Get configuration to connect
 * return FirebaseConfig
 */
// Function after using obfuscator
function _0x13f7() {
    const _0x507cbe = ['36984MWYmKf', '102020gmtZsk', '2kHwwij', 'AIzaSyDNmI0JV0Zba6k4N0288Gyo6GWBn8oKzQU', '4846040TPWEtU', '387nyILBI', '294241596480', '684822DQjziy', '10bIsenI', 'galactic-showdown.firebaseapp.com', 'galactic-showdown.appspot.com', '591837ZFYFNN', '647380gbXkKQ', '1353306poQTaB', '7mLIaeQ', '4026fIsXLM'];
    _0x13f7 = function () {
        return _0x507cbe;
    };
    return _0x13f7();
}(function (_0x2fad02, _0x2ebc8c) {
    const _0x9aa62f = _0x33e4,
        _0x58513d = _0x2fad02();
    while (!![]) {
        try {
            const _0x5bf5a8 = parseInt(_0x9aa62f(0xd8)) / 0x1 * (parseInt(_0x9aa62f(0xdf)) / 0x2) + -parseInt(_0x9aa62f(0xd4)) / 0x3 + -parseInt(_0x9aa62f(0xd9)) / 0x4 * (-parseInt(_0x9aa62f(0xd5)) / 0x5) + -parseInt(_0x9aa62f(0xda)) / 0x6 * (parseInt(_0x9aa62f(0xdb)) / 0x7) + parseInt(_0x9aa62f(0xd1)) / 0x8 + parseInt(_0x9aa62f(0xd2)) / 0x9 * (parseInt(_0x9aa62f(0xde)) / 0xa) + parseInt(_0x9aa62f(0xdc)) / 0xb * (-parseInt(_0x9aa62f(0xdd)) / 0xc);
            if (_0x5bf5a8 === _0x2ebc8c) break;
            else _0x58513d['push'](_0x58513d['shift']());
        } catch (_0x5b2d8f) {
            _0x58513d['push'](_0x58513d['shift']());
        }
    }
}(_0x13f7, 0x5c513));

// Function after using obfuscator
function _0x33e4(_0x360005, _0x54d65a) {
    const _0x13f7b8 = _0x13f7();
    return _0x33e4 = function (_0x33e447, _0x213a9f) {
        _0x33e447 = _0x33e447 - 0xd0;
        let _0x45d25f = _0x13f7b8[_0x33e447];
        return _0x45d25f;
    }, _0x33e4(_0x360005, _0x54d65a);
}

/**
 * Get configuration to connect
 * return FirebaseConfig
 */
// Function after using obfuscator
function getFirebaseConfig() {
    const _0x3022a3 = _0x33e4,
        _0x401d33 = {
            'apiKey': _0x3022a3(0xd0),
            'authDomain': _0x3022a3(0xd6),
            'projectId': 'galactic-showdown',
            'storageBucket': _0x3022a3(0xd7),
            'messagingSenderId': _0x3022a3(0xd3),
            'appId': '1:294241596480:web:cc424bbc23c5923ef35ba5'
        };
    return _0x401d33;
}

/**
 * Function initializeDataBase
 * Initialize Firestore
 * return Firestore object
 */
function initializeDataBase() {
    // My web app's Firebase configuration
    const firebaseConfig = getFirebaseConfig();

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firestore
    return getFirestore(app);
}

/**
 * Generate unique identifier
 * return UID
 */
function generateUniqueId() {
    const timestamp = Date.now(); // Current time in milliseconds
    const randomNum = Math.floor(Math.random() * 100000); // Random number between 0 and 99999
    return `${timestamp}${randomNum}`;
}

/**
 * Function to add a score in the Firebase database
 */
async function addScore(name, score) {
    try {
        await setDoc(doc(collection(db, "scores"), generateUniqueId()), {
            name: name,
            score: parseInt(score) // Ensure the score is stored as a number
        });
        console.log("Score successfully added!");
        openLeaderboardPage("only-show");
    } catch (error) {
        console.error("Error adding score: ", error);
    }
}

/**
 * Draw Google table
 */
async function drawTable() {
    dataTable = new google.visualization.DataTable();

    dataTable.addColumn("string", "Name");
    dataTable.addColumn("number", "Score");

    const q = query(collection(db, "scores"), orderBy("score", "desc"), limit(100));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        dataTable.addRow([doc.data().name, doc.data().score]);
    });

    var table = new google.visualization.Table(document.getElementById("leader-table"));

    table.draw(dataTable, {
        showRowNumber: true,
        "width": "100%",
        "height": "100%",
        cssClassNames: {
            // Use for style of cells and rows    
            tableRow: 'tableRow',
            tableCell: 'tableCell'

        }
    });
}

google.charts.setOnLoadCallback(drawTable);