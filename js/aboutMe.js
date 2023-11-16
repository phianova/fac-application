//Wait til content loaded
document.addEventListener("DOMContentLoaded", function() {

///////////////////////////////////
/* Mood based playlist selector! */
///////////////////////////////////
//Declarations
    let playlistModalContent = document.querySelector(".playlist-modal-content");
    let openPlaylistModal = document.querySelector(".open-playlist-modal");
    let closePlaylistModal = document.querySelector(".close-playlist-modal");
    let blurBackground = document.querySelector(".blur-background");
    let moodBox = document.querySelector(".moods-box");
    let embeddedPlaylist = document.querySelector(".embedded-playlist");
    let question = document.querySelector(".question");
    let moodSelector1 = document.querySelector(".mood-selector-1");
    let moodSelector2 = document.querySelector(".mood-selector-2");
    let moodSelector3 = document.querySelector(".mood-selector-3");
    let moodSelector4 = document.querySelector(".mood-selector-4");
    let moodSelector5 = document.querySelector(".mood-selector-5");
    let moodSelector6 = document.querySelector(".mood-selector-6");
    let moodSelector7 = document.querySelector(".mood-selector-7");
    let loadingScreen = document.querySelector(".loading-screen");

// Control modal opening, closing and background blurring
    openPlaylistModal.addEventListener("click", function() {
        playlistModalContent.classList.remove("hidden-modal");
        blurBackground.classList.remove("hidden-blur");
        moodBox.classList.remove("hidden-box");
        embeddedPlaylist.classList.add("hidden-playlist");
        question.classList.remove("hidden-question");
    });

    let closePlaylistModalFunction = function() {
        playlistModalContent.classList.add("hidden-modal");
        blurBackground.classList.add("hidden-blur");
    };

    blurBackground.addEventListener("click", closePlaylistModalFunction);
    closePlaylistModal.addEventListener("click", closePlaylistModalFunction);

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
            closePlaylistModalFunction();
        }
    });

//Control mood selector and playlists

    moodSelector1.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen")
        question.classList.add("hidden-question");
    });

    moodSelector2.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen");
        question.classList.add("hidden-question");
    });

    moodSelector3.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen");
        question.classList.add("hidden-question");
    });

    moodSelector4.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen");
        question.classList.add("hidden-question");
    });

    moodSelector5.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen");
        question.classList.add("hidden-question");
    });

    moodSelector6.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen");
        question.classList.add("hidden-question");
    });

    moodSelector7.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
        loadingScreen.classList.remove("hidden-loading-screen");
        question.classList.add("hidden-question");
    });
    
    document.getElementById("playlistLink").onload = function () {
        loadingScreen.classList.add("hidden-loading-screen");
    }
////////////////////////////
/* Dice roller modal */
////////////////////////////

    //Declarations
    let diceModalContent = document.querySelector(".dice-modal-content");
    let openDiceModal = document.querySelector(".open-dice-modal");
    let closeDiceModal = document.querySelector(".close-dice-modal");
    let diceTextElement = document.querySelector(".dice-text");

// Control modal opening, closing and background blurring
    openDiceModal.addEventListener("click", function() {
        diceModalContent.classList.remove("hidden-modal");
        blurBackground.classList.remove("hidden-blur");
        diceTextElement.classList.remove("hidden-dice-text");
    });

    let closeDiceModalFunction = function() {
        diceModalContent.classList.add("hidden-modal");
        blurBackground.classList.add("hidden-blur");
    };

    blurBackground.addEventListener("click", closeDiceModalFunction);
    closeDiceModal.addEventListener("click", closeDiceModalFunction);

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && !dicemodalContent.classList.contains("hidden")) {
            closeDiceModalFunction();
        }
    });



});

////////////////////////////
/* Dice roller code */
////////////////////////////

const diceArray = [
    [1, "Oof! Critical failure. ", "./images/diceRoll/1.png"],
    [2, "Aw, that's pretty low. No dice, I'm afraid! (Well, one die..) ", "./images/diceRoll/2.png"],
    [3, "Aw, that's pretty low. No dice, I'm afraid! (Well, one die..) ", "./images/diceRoll/3.png"],
    [4, "Aw, that's pretty low. No dice, I'm afraid! (Well, one die..) ", "./images/diceRoll/4.png"],
    [5, "Aw, that's pretty low. No dice, I'm afraid! (Well, one die..) ", "./images/diceRoll/5.png"],
    [6, "Aw, that's pretty low. No dice, I'm afraid! (Well, one die..) ", "./images/diceRoll/6.png"],
    [7, "Aw, that's pretty low. No dice, I'm afraid! (Well, one die..) ", "./images/diceRoll/7.png"],
    [8, "Ooooh, nearly a success...but not quite. ", "./images/diceRoll/8.png"],
    [9, "SO close! But not quite. ", "./images/diceRoll/9.png"],
    [10, "YES! You JUST made it. ", "./images/diceRoll/10.png"],
    [11, "Nice one! Success. ", "./images/diceRoll/11.png"],
    [12, "Nice one! Success. ", "./images/diceRoll/12.png"],
    [13, "Nice one! Success. ", "./images/diceRoll/13.png"],
    [14, "Nice one! Success. ", "./images/diceRoll/14.png"],
    [15, "Nice one! Success. ", "./images/diceRoll/15.png"],
    [16, "Nice one! Success. ", "./images/diceRoll/16.png"],
    [17, "Nice one! Success. ", "./images/diceRoll/17.png"],
    [18, "Wowwww you're doing great!", "./images/diceRoll/18.png"],
    [19, "Well done! A roaring success!", "./images/diceRoll/19.png"],
    [20, "PEW PEW PEW! Critical hit.", "./images/diceRoll/20.png"]
]

var adventureStage = 0;
var adventureStageText = "You're in a forest, looking for birds and mushrooms. You see a nest up a tree. Roll Strength to climb the tree to take a picture (without disturbing the birds, of course)."

function restartDiceRoll() {
    let diceRoller = document.getElementById("dice-roller");
    diceRoller.style.display = "inline-flex";
    let restartDiceRoller = document.getElementById("restart-dice-roller");
    restartDiceRoller.style.display = "none";

    adventureStage = 0;
    adventureStageText = "You're in a forest, looking for birds and mushrooms. You see a nest up a tree. Roll Strength to climb the tree to take a picture (without disturbing the birds of course)."
    let diceText = document.getElementById("dice-text");
    diceText.textContent = adventureStageText;
    let diceImage = document.getElementById("dice-image");
    diceImage.src = "./images/diceRoll/questionMark.png"
}

var finished = false;

function diceRoll() {
    finished = false;
    diceSelector = Math.floor(Math.random()*20);
    diceResult = diceSelector+1;
    if (diceResult >= 10) {
        adventureStage++;
    }
    adventureStage++;
    adventureProgress();
    if (finished == true) {
        let diceRoller = document.getElementById("dice-roller");
        diceRoller.style.display = "none";
        let restartDiceRoller = document.getElementById("restart-dice-roller");
        restartDiceRoller.style.display = "inline-flex";
    }
    generateDiceText();
    generateImage();
}

function adventureProgress() {
    const adventureStageArray = [
        "You're in a forest, looking for birds and mushrooms. You see a nest up a tree. Roll Strength to climb the tree to take a picture (without disturbing the birds of course).",
        "You fell down onto the forest floor. But whoa...there are some really cool mushrooms down here. Roll Intelligence to see if you can identify any.",
        "You climbed the tree and found some adorable baby birds. Can you identify them? Roll Intelligence...",
        "The birds are cute and fluffy but you have no clue what they are. Buuuut there are some real cool mushrooms down here. Roll Intelligence to see if you can find an edible one.",
        "You identified the birds and climbed back down the tree to safety. But wait! There are some cool mushrooms down here. Can you identify those too?",
        "Ummmm...maybe this one? It's bright and fun looking! Probably means it's edible right? You light your campfire and start making a mushroom soup. Roll Constitution to see if you can stomach it...",
        "C'est un chanterelle, non? That's gotta be a good'un. You light your campfire and make a soup. Roll Constitution to see how it goes down...",
        "That was not good soup. Looks like you're going home with a tummy ache...Roll to start again!",
        "Dammmmn that's good soup. You go home happy and contented with a great day's foraging. Roll to explore again!"
    ]
    //Stage 0: tree climb question
    //Stage 1: tree climb failed - skip bird stages entirely, go to stage 5/6.
    //Stage 2: tree climb succeeded - go to stage 3/4.
    //Stage 3: bird ID failed - go to stage 5/6.
    //Stage 4: bird ID succeeded - go to stage 5/6.
    //Stage 5: mushroom ID failed - go to stage 7/8.
    //Stage 6: mushroom ID succeeded - go to stage 7/8.
    //Stage 7: bad soup, restart
    //Stage 8: bad soup, restart
    finished = false;
    console.log("before", adventureStage);
    adventureStageText=adventureStageArray[adventureStage];
    if (adventureStage == 1) { //If first roll fails
        adventureStage = 4;
    }
    /*else if (adventureStage == 2) { //If first roll succeeds
        adventureStageText = adventureStageArray[2];
    }*/
    else if (adventureStage == 3) { //If first roll succeeds and second roll fails
        adventureStageText = adventureStageArray[3];
        adventureStage = 4;
    }
    /*else if (adventureStage == 4) { //If first and second roll succeed
        adventureStageText = adventureStageArray[4];
    }*/
    else if (adventureStage == 5) { //mushroom identification fails
        //text
        adventureStage = 6;
    }
    /*else if (adventureStage == 6) { //mushrom ID succeeds
        text
    }*/
    else if (adventureStage == 7) { //soup fails
        finished = true;    
    }
    else if (adventureStage == 8) {
        finished = true;
    }
    console.log("after", adventureStage, finished);
}

function generateDiceText() {
    let diceReaction = diceArray[diceSelector][1];
    let diceText = document.getElementById("dice-text");
    diceText.textContent = diceReaction+adventureStageText;
}

function generateImage() {
    let diceImage = document.getElementById("dice-image");
    diceImage.src = diceArray[diceSelector][2];
    let restartDiceImage = document.getElementById("restart-dice-image");
    restartDiceImage.src = diceImage.src;
}

////////////////////////////
/* Randomised video link! */
////////////////////////////
function randomVideo () {
    const linksArray = [
        "https://youtu.be/qXCy-_DcKuE",
        "https://youtu.be/iZWLDkuGDas",
        "https://youtu.be/pkpmTEnaHkA",
        "https://youtu.be/A34Iz8z3Tks",
        "https://youtu.be/AdtW3DKy4jk"
    ]
    let videoLink = document.getElementById("video-link");
    videoLink.videoSelector = Math.floor(Math.random()*5);
    videoLink.href = linksArray[videoLink.videoSelector];
}
