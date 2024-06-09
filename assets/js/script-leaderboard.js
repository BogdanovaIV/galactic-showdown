//Google charts
google.charts.load("current", {
    "packages": ["corechart", "table"]
});

// Import the functions which need from the SDKs
import {
    initializeApp
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, setDoc, getDocs, query, orderBy, limit } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

let dataTable;

// Database to store scores
const db = initializeDataBase();

// Add listener events before the page loads.
document.addEventListener("readystatechange", function () {
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
 * Initialize Firestore
 * return Firestore object
 */
function initializeDataBase() {
    // My web app's Firebase configuration
    const firebaseConfig = {
        apiKey: "**************************",
        authDomain: "galactic-showdown.firebaseapp.com",
        projectId: "galactic-showdown",
        storageBucket: "galactic-showdown.appspot.com",
        messagingSenderId: "294241596480",
        appId: "**************************"
    };

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