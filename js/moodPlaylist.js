//Wait til content loaded
document.addEventListener("DOMContentLoaded", function() {

//Declarations
    let modalContent = document.querySelector(".modal-content");
    let openModal = document.querySelector(".open-modal");
    let closeModal = document.querySelector(".close-modal");
    let blurBackground = document.querySelector(".blur-background");
    let moodBox = document.querySelector(".moods-box");
    let embeddedPlaylist = document.querySelector(".embedded-playlist");
    let moodSelector1 = document.querySelector(".mood-selector-1");
    let moodSelector2 = document.querySelector(".mood-selector-2");
    let moodSelector3 = document.querySelector(".mood-selector-3");
    let moodSelector4 = document.querySelector(".mood-selector-4");
    let moodSelector5 = document.querySelector(".mood-selector-5");
    let moodSelector6 = document.querySelector(".mood-selector-6");
    let moodSelector7 = document.querySelector(".mood-selector-7");

// Control modal opening, closing and background blurring
    openModal.addEventListener("click", function() {
        modalContent.classList.remove("hidden-modal");
        blurBackground.classList.remove("hidden-blur");
        moodBox.classList.remove("hidden-box");
        embeddedPlaylist.classList.add("hidden-playlist");
    });

    let closeModalFunction = function() {
        modalContent.classList.add("hidden-modal");
        blurBackground.classList.add("hidden-blur");
    };

    blurBackground.addEventListener("click", closeModalFunction);
    closeModal.addEventListener("click", closeModalFunction);

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
            closeModalFunction();
        }
    });

//Control mood selector and playlists - NOW UNNECESSARY!

    moodSelector1.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });

    moodSelector2.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });

    moodSelector3.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });

    moodSelector4.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });

    moodSelector5.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });

    moodSelector6.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });

    moodSelector7.addEventListener("click", function() {
        embeddedPlaylist.classList.remove("hidden-playlist");
        moodBox.classList.add("hidden-box");
    });


/* Let's rewrite this! Made absolutely no sense lol.
    function getLinkToEmbed() {
        let displayLink = "";
        let moodSelectorA = document.querySelector(".mood-selector-a");
        moodSelectorA.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/4CjEUUoSBF5zdEA5jfJUNZ?utm_source=generator";
        });
        let moodSelectorB = document.querySelector(".mood-selector-b");
        moodSelectorB.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/2h3USsPOMXeNuz5lU4Rsdn?utm_source=generator";
        });
        let moodSelectorC = document.querySelector(".mood-selector-c");
        moodSelectorC.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/05PtFCMUzNfznlZDxdepM1?utm_source=generator";
        });
        let moodSelectorD = document.querySelector(".mood-selector-d");
        moodSelectorD.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/3IFgoC61KWrfTN8O7O79AG?utm_source=generator";
        });
        let moodSelectorE = document.querySelector(".mood-selector-e");
        moodSelectorE.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/4aD5qAacFjB6jGwmPdJb8P?utm_source=generator";
        });
        let moodSelectorF = document.querySelector(".mood-selector-f");
        moodSelectorF.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/3AQM3CEAlqK96YCohnTAcy?utm_source=generator";
        });
        let moodSelectorG = document.querySelector(".mood-selector-g");
        moodSelectorG.addEventListener("click", function() {
            displayLink = "https://open.spotify.com/embed/playlist/1atBiiQZQLGS6Sz6Hb5Veh?utm_source=generator";
        });
        return displayLink;
    }
*/
/*    function getLinkToEmbed() {

        var displayLink = "";
        if (moodSelector1.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/4CjEUUoSBF5zdEA5jfJUNZ?utm_source=generator";
        }
        else if (moodSelector2.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/2h3USsPOMXeNuz5lU4Rsdn?utm_source=generator";
        }
        else if (moodSelector3.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/05PtFCMUzNfznlZDxdepM1?utm_source=generator";
        }
        else if (moodSelector4.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/3IFgoC61KWrfTN8O7O79AG?utm_source=generator";
        }
        else if (moodSelector5.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/4aD5qAacFjB6jGwmPdJb8P?utm_source=generator";
        }
        else if (moodSelector6.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/3AQM3CEAlqK96YCohnTAcy?utm_source=generator";
        }
        else if (moodSelector7.classList.contains("clicked")) {
            displayLink = "https://open.spotify.com/embed/playlist/1atBiiQZQLGS6Sz6Hb5Veh?utm_source=generator";
        }
        console.log(displayLink);
        return displayLink;
    }

    document.getElementById("playlistLink").src = getLinkToEmbed();
*/
});