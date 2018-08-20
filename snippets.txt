function say(text) {
    document.write(text + "<br />");
}


function list(array) {
    // write simple objects to page
    for (var index in array) {
        //say(typeof array.index);
        //say(typeof array[index]);
        if (typeof array[index] == "object") {
            //say("aha!");
            list(array[index]);
        }
        say(index + ": " + array[index]);
    }
    // pretty-print complex array to console
    array = JSON.stringify(array,"---",2);
    console.log(array);
    
}
// things to do: write this function recursively
