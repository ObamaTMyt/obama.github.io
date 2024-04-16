function toggleVideo() {
    var startScreen = document.getElementById("startScreen");
    startScreen.style.display = "none";

    var videoContainer = document.getElementById("video-container");
    var profile = document.querySelector(".profile");
    var socialLinks = document.querySelector(".social-links");

    videoContainer.style.display = "block";
    profile.style.display = "block";
    socialLinks.style.display = "flex";

    document.addEventListener('contextmenu', function (event) {
        event.preventDefault();
    });
}
