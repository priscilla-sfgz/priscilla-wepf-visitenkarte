let spotifyPlayer;

window.onSpotifyIframeApiReady = function (IFrameAPI) {
    const element = document.getElementById("spotify");
    const options = {
        uri: "spotify:track:3XcBnNDlch48NLxfPTl4ju",
        width: 300,
        height: 80
    };
    IFrameAPI.createController(element, options, function (controller) {
        spotifyPlayer = controller;
    });
};

function playAnimation() {
    document.querySelector("section").classList.remove("AnimationPaused");
    document.getElementById("playButton").style.display = "none";

    // Spotify abspielen
    spotifyPlayer.play();
}