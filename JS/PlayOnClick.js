function toggleVideo() {
    var startScreen = document.getElementById("startScreen");
    startScreen.style.display = "none";

    var videoContainer = document.getElementById("video-container");
    var video = document.getElementById("videos");
    videoContainer.style.display = "block";

    

    if (video.paused) {
        video.play();
    }

    if (typeof playSong === "function") {
        playSong();
    }

    var profile = document.querySelector(".profile");
    var socialLinks = document.querySelector(".social-links");

    profile.style.display = "block";
    socialLinks.style.display = "flex";
}
