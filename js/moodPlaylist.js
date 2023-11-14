//Wait til content loaded
document.addEventListener("DOMContentLoaded", function() {

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

});