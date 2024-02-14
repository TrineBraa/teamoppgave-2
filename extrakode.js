/* Istedet for å bruke denne har vi en if/else i selve diven hvor vi ønsker disse bli vist.
satt opp som dette i diven:
${ catIsHungry ? "🐟" : "" }

function showIcon() {
    document.getElementById('food').innerHTML = '🐟';
    document.getElementById('toy').innerHTML = '🧶';
    document.getElementById('love').innerHTML = '❤️';
    document.getElementById('clean').innerHTML = '🛁';
    document.getElementById('rest').innerHTML = '🛏️';
} */


//funksjonen som starter spillet under loadup.
/* function startCatLeaveTimer() {
    catLeaveTimer = setTimeout(catLeave(), 10000);
    feedingTimer = setTimeout(console.log('bob er død'), 10000)
    playingTimer = setTimeout(test(), 10000)
    pettingTimer = setTimeout(catWantsPetting = true, 10000)
    cleaningTimer = setTimeout(catNeedABath = true, 10000)
    sleepingTimer = setTimeout(catNeedSleep = true, 10000)
} */

/* const targetTime = date.now() + 60 * 1000; //60 sec fra nå//

function updateTimer() {
    const now = Date.now();
    const remainingTime = targetTime - now;

    if (remainingTime <= 0) {
        clearInterval(intervalId);
        document.getElementById("timer").innerHTML = `\u{1F550}`;//skal være unicode for en klokke//


    } else {
        const seconds = Math.ceil(remainingTime / 1000);
        document.getElementById(`timer`).innerHTML`${seconds} seconds remaining`;

    }

}

function startTimer() {

    updateTimer();
    const intervalId = setInterval(updateTimer, 1000);
}
*/


/* function catLeave() {
    //Sett katt bilde til ingen ting og disable knappene

} */

/* //funksjonen som mater bob når han blir sulten.
function feedTamagotchi() {
    if (catIsHungry) {
        clearTimeout(catLeaveTimer);
        startCatLeaveTimer();

        catIsHungry = false;
        feedingTimer = setTimeout();
    }
    else {
        alert("Bob is no longer hungry");
    }

    changeView();
} */

// //funksjon som lar oss leke med bob når han vil det.
// function playTamagotchi() {
//     clearTimeout(catLeaveTimer);
//     startCatLeaveTimer();

//     changeView();
// }

// //for å kose og klappe på Bob
// function petTamagotchi() {
//     clearTimeout(catLeaveTimer);
//     startCatLeaveTimer();

//     changeView();
// }

// //gjøre ren boksen hans
// function cleanTamagotchi() {
//     clearTimeout(catLeaveTimer);
//     startCatLeaveTimer();

//     changeView();
// }


// function sleepTamagotchi() {
//     clearTimeout(catLeaveTimer);
//     startCatLeaveTimer();

//     changeView();
// }
