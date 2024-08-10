$(window).on('load', function () {
    $("#loader").fadeOut("slow", function () {
        $("#startScreen").fadeOut("slow");
    });
});



var videoStarted = false; 

function toggleVideo() {
    var startScreen = document.getElementById("startScreen");
    startScreen.style.opacity = "0"; 
    startScreen.style.pointerEvents = "none"; 

    var videoContainer = document.getElementById("video-container");
    var video = document.getElementById("videos");
    videoContainer.style.display = "block";

    if (!videoStarted) {
        if (video.paused) {
            video.play();
            videoStarted = true;
        }
    }

    var profile = document.querySelector(".profile");
    var socialLinks = document.querySelector(".social-links");

    profile.style.display = "block";
    socialLinks.style.display = "flex";
}

window.onload = function () {
    var songs = [
        "Songs/Dag.mp4",
        "Songs/Gurl.mp4",
        "Songs/Money.mp4",
        "Songs/Russ.mp4",
       
    ];
    
    var randomIndex = Math.floor(Math.random() * songs.length);
    var videoElement = document.getElementById('videos');
    videoElement.src = songs[randomIndex];
};