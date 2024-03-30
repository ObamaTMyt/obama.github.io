window.onload = function () {
    var songs = [
        "Songs/göre.mp4",
        "Songs/Stockholm.mp4",
        "Songs/Maladin.mp4",
        "Songs/Toto.mp4",
        "Songs/Zombie.mp4",
        "Songs/Air.mp4",
        "Songs/Catwalk.mp4",
        "Songs/Himmlen.mp4",
        "Songs/Områden.mp4",
        "Songs/Vi.mp4",
        "Songs/Reveng.mp4",
        "Songs/Russian.mp4",
        "Songs/Stand.mp4",
        "Songs/Trakter.mp4",
        "Songs/Yamaksi.mp4",
        "Songs/Decible.mp4",
    ];
    
    var randomIndex = Math.floor(Math.random() * songs.length);
    var videoElement = document.getElementById('videos');
    videoElement.src = songs[randomIndex];
};
