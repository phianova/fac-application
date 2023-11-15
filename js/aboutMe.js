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
/* Dice roller! */
////////////////////////////

    //Declarations
    let diceModalContent = document.querySelector(".dice-modal-content");
    let openDiceModal = document.querySelector(".open-dice-modal");
    let closeDiceModal = document.querySelector(".close-dice-modal");
    let diceText = document.querySelector(".dice-text");

// Control modal opening, closing and background blurring
    openDiceModal.addEventListener("click", function() {
        diceModalContent.classList.remove("hidden-modal");
        blurBackground.classList.remove("hidden-blur");
        diceText.classList.remove("hidden-dice-text");
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

////////////////////////////
/* Dice roller */
////////////////////////////

