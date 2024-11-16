const audio = document.getElementById("mewingAudio");
window.addEventListener("click", () => {
    audio.muted = false;
    audio.play();
        });