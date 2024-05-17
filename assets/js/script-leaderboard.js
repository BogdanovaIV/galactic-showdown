//Google charts
google.charts.load('current', {'packages':['corechart', 'table']});

/**
 * The returned leaderboard path
 */
function getLeaderboardPath() {
    return window.location.origin + "/leaderboard.json";
}

/**
 * Parse json file with leaders
 * the returned leader array
 */
async function parseFile(){
    
    let response = await fetch(getLeaderboardPath());
    if (response.ok) { 
        try{
            return await response.json();
        }
        catch(err) {
            console.log(`File parsing error: ${err}`);
            alert(`File parsing error: ${err}. Contact the administrator.`);
            return []; 
        }
    } 
        
    console.log(`HTTP error! status: ${response.status}`);
    alert(`HTTP error! status: ${response.status}. Contact the administrator.`);
    return []; 
}

/**
 * Draw Google table
 */
async function drawTable(){
    var data = new google.visualization.DataTable();
    
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Score');

    let leaderArray = await parseFile();
    data.addRows(leaderArray.length);
    for(let i =0; i < leaderArray.length; i++) {
        data.setCell(i, 0, leaderArray[i].name);
        data.setCell(i, 1, leaderArray[i].score);
    }
    var table = new google.visualization.Table(document.getElementById('leader-table'));
    table.draw(data, {showRowNumber: true, width: '100%', height: '100%'});
}
  
google.charts.setOnLoadCallback(drawTable);

