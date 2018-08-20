function say(text) {
    document.write(text + "<br />");
}


function list(array) {
    // write simple objects to page
    for (var index in array) {
        say(index + ": " + array[index]);
    }
    // pretty-print complex array to console
    array = JSON.stringify(array,"---",2);
    console.log(array);
    
}
// things to do: write this function recursively
