document.addEventListener("DOMContentLoaded", function() {

    let modalContent = document.querySelector(".modal-content");
    let openModal = document.querySelector(".open-modal");
    let closeModal = document.querySelector(".close-modal");
    let blurBackground = document.querySelector(".blur-background");

    openModal.addEventListener("click", function() {
        modalContent.classList.remove("hidden-modal");
        blurBackground.classList.remove("hidden-blur");
    });

    let closeModalFunction = function() {
        modalContent.classList.add("hidden-modal");
        blurBackground.classList.add("hidden-blur");
    }

    blurBackground.addEventListener("click", closeModalFunction);
    closeModal.addEventListener("click", closeModalFunction);

    document.addEventListener("keydown", function(event) {
        if (event.key === "Escape" && !modalContent.classList.contains("hidden")) {
            closeModalFunction();
        }
    });

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
});