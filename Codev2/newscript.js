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

// V - View
changeView();

function changeView() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="container">
        <h1>The Bob Game</h1>
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
            <button class="button" onclick="feedCat()">Feed Bob</button>
            <button class="button" onclick="playWithCat()">Play with Bob</button>
            <button class="button" onclick="petTheCat()">Pet Bob</button>
            <button class="button" onclick="batheTheCat()">Clean Bob's Litter Box</button>
            <button class="button" onclick="letCatRest()">Give Bob Rest</button>
        </div>
    </div>
    `;

    catLeaves();
}

// C - Controller
startCatTimer();

//funksjonen som starter spillet under loadup.
function startCatTimer() {
    feedingTimer = setInterval(makeCatHungry, 7000) //*7sek*//
    playingTimer = setInterval(makeCatWantToPlay, 5000) //*5sek*//
    pettingTimer = setInterval(makeTheCatWantPets, 3000) //*3sek*//
    cleaningTimer = setInterval(catIsStinky, 8000) //*8sek*//
    sleepingTimer = setInterval(catIsSleepy, 9000) //*9sek*//
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
    }
}