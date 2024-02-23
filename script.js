let scout = "";

let team = "";

let match = "";

const matchData = { scout: "", team: "", match: "" };

function startScouting() {

  let qrcodeElement = document.getElementById("qrcode");
  
  while (qrcodeElement.firstChild) {
    
    qrcodeElement.removeChild(qrcodeElement.firstChild);
    
  }
    
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
  
  new QRCode(document.getElementById("qrcode"), full);

}

