function say(text) {
    document.write(text + "<br />");
};

function list(array) {
    for (var index in array) {
        say(index + ": " + array[index]);
    }
}
// things to do: write this function recursively
