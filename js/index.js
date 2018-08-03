var video = {
    length: 90,
    play: function() {
    return "The video runs for " + this.length + " minutes.";
}
};

document.write(video.play);
