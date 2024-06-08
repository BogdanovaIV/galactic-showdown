//Google charts
google.charts.load("current", {
    "packages": ["corechart", "table"]
});

let dataTable;

// Add listener events before the page loads.
document.addEventListener("readystatechange", function () {
    const params = getQueryParams();
    if (params.hasOwnProperty("type") && params["type"] === "add-user") {
        document.getElementsByClassName("user-score")[0].className = "user-score";
        document.getElementsByClassName("save-score")[0].className = "save-score";
    }
    if (params.hasOwnProperty("score")) {
        document.getElementById("total-score").innerText = params["score"];
    }
    document.getElementsByClassName("save")[0].addEventListener("click", function () {
        updateFile();
    });

});

/**
 * The returned leaderboard path
 */
function getLeaderboardPath() {
    const path = window.location.pathname.replace(/\/[^\/]*$/, '');
    return window.location.origin + path + "/leaderboard.json";
}

/**
 * Parse json file with leaders
 * the returned leader array
 */
async function parseFile() {
    // Use asynchronous call because we have to get the file from the server.
    try {
        // Initiate the fetch request to get the file from the server
        let response = await fetch(getLeaderboardPath());
        // Check if the response is okay
        if (response.ok) {
            try {
                return await response.json();
            } catch (error) {
                console.error(`File parsing error: ${error}`);
                alert(`File parsing error: ${error}. Contact the administrator.`);
                return [];
            }
        }
    } catch (error) {
        console.error(`HTTP error! status: ${response.status}`);
        alert(`HTTP error! status: ${response.status}. Contact the administrator.`);
        return [];
    }
}

/**
 * Draw Google table
 */
async function drawTable() {
    dataTable = new google.visualization.DataTable();

    dataTable.addColumn("string", "Name");
    dataTable.addColumn("number", "Score");

    let leaderArray = await parseFile();
    dataTable.addRows(leaderArray.length);
    for (let i = 0; i < leaderArray.length; i++) {
        dataTable.setCell(i, 0, leaderArray[i].name);
        dataTable.setCell(i, 1, leaderArray[i].score, leaderArray[i].score, {
            'className': 'center-text'
        });
    }
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

async function updateFile() {
    //This function will be done in a future version
    alert('Saving your score. Note: In a future version, this function will be done.');
}