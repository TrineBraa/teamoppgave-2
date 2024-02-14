// M - Model
let cat = 'Bob';

let feedingTimer;
let playingTimer;
let pettingTimer;
let cleaningTimer;
let sleepingTimer;
let catLeaveTimer;

let catIsHungry = false;
let catWantsToPlay = false;
let catWantsPetting = false;
let catNeedsABath = false;
let catNeedsSleep = false;
let catIsDead = false;

// V - View
changeView();

function changeView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="container">
        <h1>The Bob Game v2</h1>
        <img>
        <div class="lightcontainer">
            <div class="box">${catIsHungry ? "🐟" : ""}</div>
            <div class="box">${catWantsToPlay ? "🧶" : ""}</div>
            <div class="box">${catWantsPetting ? "❤️" : ""}</div>
            <div class="box">${catNeedsABath ? "🛁" : ""}</div>
            <div class="box">${catNeedsSleep ? "🛏️" : ""}</div>
        </div>
        <div id="bob">🐈</div>
        <div>
        <button ${catIsDead ? "disabled" : ""} class="buttons" onclick="feedCat()">Feed Bob</button>
        <button ${catIsDead ? "disabled" : ""} class="buttons" onclick="playWithCat()">Play with Bob</button>
        <button ${catIsDead ? "disabled" : ""} class="buttons" onclick="petTheCat()">Pet Bob</button>
        <button ${catIsDead ? "disabled" : ""} class="buttons" onclick="batheTheCat()">Clean Bob's Litter Box</button>
        <button ${catIsDead ? "disabled" : ""} class="buttons" onclick="letCatRest()">Give Bob Rest</button>
        </div>
        <br/>
        <button class="restartbutton" onclick="restartGame()">Restart Game</button>
    </div>
    `;

    catLeaves();
}

// C - Controller
startCatTimer();

//funksjonen som starter spillet under loadup.
function startCatTimer() {

    feedingTimer = setInterval(makeCatHungry, getRandomInt(3000, 30000)) //*7sek*//
    playingTimer = setInterval(makeCatWantToPlay, getRandomInt(5000, 30000)) //*5sek*//
    pettingTimer = setInterval(makeTheCatWantPets, getRandomInt(3000, 30000)) //*3sek*//
    cleaningTimer = setInterval(catIsStinky, getRandomInt(2000, 30000)) //*8sek*//
    sleepingTimer = setInterval(catIsSleepy, getRandomInt(1000, 30000)) //*9sek*//
}
// En funksjom for å gjøre katten sulten, en funksjon for å mate katten osv. 
// Kan lage en stor funksjon hvor man sjekker kattens behov ved å sende inn parameter
function makeCatHungry() {
    catIsHungry = true;
    changeView();
}

function feedCat() {
    catIsHungry = false;
    changeView();
}

function makeCatWantToPlay() {
    catWantsToPlay = true;
    changeView();
}

function playWithCat() {
    catWantsToPlay = false;
    changeView();
}

function makeTheCatWantPets() {
    catWantsPetting = true;
    changeView();
}

function petTheCat() {
    catWantsPetting = false;
    changeView();
}

function catIsStinky() {
    catNeedsABath = true;
    changeView();
}

function batheTheCat() {
    catNeedsABath = false;
    changeView();

}

function catIsSleepy() {
    catNeedsSleep = true;
    changeView();
}

function letCatRest() {
    catNeedsSleep = false;
    changeView();
}

function catLeaves() {
    if (catIsHungry && catWantsToPlay && catWantsPetting && catNeedsABath && catNeedsSleep) {
        document.getElementById("bob").innerHTML = '<img src="https://i.ytimg.com/vi/69pcv-UBn1s/hqdefault.jpg"/>';
        catIsDead = true;
    }
}

function restartGame() {
    location.reload();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

