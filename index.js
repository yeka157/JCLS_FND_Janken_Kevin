//win = 25

let gambarNPC = [
    "batu.png",
    "gunting.png",
    "kertas.png"
];

let startFrom = 0;

let winCount = 0;
let loseCount = 0;
let drawCount = 0;
let scoreCount = 0;

let gambarSrc = document.getElementById("npc");

function blinkImg() {
    gambarSrc.src = gambarNPC[startFrom];
    if (startFrom > 1) {
        startFrom = 0;
    } else {
        startFrom++;
    }
}

let gambarGerak = setInterval(blinkImg, 100);

function batu() {
    gambarGerak;
    let gambarP1 = document.getElementById("player1");
    gambarP1.src = "batu.png";
    setTimeout(() => { botImg() }, 1000);
}

function kertas() {
    gambarGerak;
    let gambarP1 = document.getElementById("player1");
    gambarP1.src = "kertas.png";
    setTimeout(() => { botImg() }, 1000);

}

function gunting() {
    gambarGerak;
    let gambarP1 = document.getElementById("player1");
    gambarP1.src = "gunting.png";
    setTimeout(() => { botImg() }, 1000);
}

function versus() {
    let gambarP1 = document.getElementById("player1").src;
    console.log(gambarP1);
    let gambarBot = document.getElementById("npc").src;
    if (gambarP1.includes("batu.png") && gambarBot.includes("batu.png")) {
        document.getElementById("winner").innerHTML = "DRAW"
        drawCount += 1;
        scoreboard();
    } 
    
    else if (gambarP1.includes("batu.png") && gambarBot.includes("kertas.png")) {
        document.getElementById("winner").innerHTML = "PC WIN ❌"
        loseCount += 1;
        scoreboard();
    } 
    
    else if (gambarP1.includes("batu.png") && gambarBot.includes("gunting.png")) {
        document.getElementById("winner").innerHTML = "Player WIN ✔"
        winCount+= 1;
        scoreCount += 25;
        scoreboard();
    } 
    
    else if (gambarP1.includes("kertas.png") && gambarBot.includes("batu.png")) {
        document.getElementById("winner").innerHTML = "Player WIN ✔"
        winCount+= 1;
        scoreCount += 25;
        scoreboard();
    } 
    
    else if (gambarP1.includes("kertas.png") && gambarBot.includes("kertas.png")) {
        document.getElementById("winner").innerHTML = "DRAW"
        drawCount += 1;
        scoreboard();
    } 
    
    else if (gambarP1.includes("kertas.png") && gambarBot.includes("gunting.png")) {
        document.getElementById("winner").innerHTML = "PC WIN ❌"
        loseCount += 1;
        scoreboard();
    } 
    
    else if (gambarP1.includes("gunting.png") && gambarBot.includes("batu.png")) {
        document.getElementById("winner").innerHTML = "PC WIN ❌"
        loseCount += 1;
        scoreboard();
    } 
    
    else if (gambarP1.includes("gunting.png") && gambarBot.includes("kertas.png")) {
        document.getElementById("winner").innerHTML = "Player WIN ✔"
        winCount+= 1;
        scoreCount += 25;
        scoreboard();
    } 
    
    else if (gambarP1.includes("gunting.png") && gambarBot.includes("gunting.png")) {
        document.getElementById("winner").innerHTML = "DRAW"
        drawCount += 1;
        scoreboard();
    }

}

function botImg() {
    clearInterval(gambarGerak);
    let gambarBot = Math.floor(Math.random() * 3);
    let handleImg = document.getElementById("npc");
    handleImg.src = gambarNPC[gambarBot];
    versus();
}

function scoreboard() {
    document.getElementById("result").innerHTML = `Result :<br>
    WIN : ${winCount}<br>
    LOSE : ${loseCount}<br>
    DRAW : ${drawCount}<br>
    Score : ${scoreCount}`
}