let scout = "";
let team = "";
let match = "";
const matchData = {scout:"", team:"", match:""};

function startScouting(){

    scout = document.getElementById("frmScout").value;
    
    let teamform = document.getElementById("frmTeams");
    team = teamform.options[teamform.selectedIndex].value;

    let matchform = document.getElementById("frmMatch");
    match = matchform.options[matchform.selectedIndex].value;
    
    matchData.scout = scout;
    matchData.team = team;
    matchData.match = match;

    let full = JSON.stringify(matchData);

    alert("Making QR Code: " + full);

    new QrCode(document,getElementById("qrcode"), full);

}

