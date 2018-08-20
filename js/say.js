function say(text) {
    document.write(text + "<br />");
}


function list(array) {
    
    // pretty-print complex array to console
    array = JSON.stringify(array,"---",2);
    document.write("<pre>");
    document.write(array);
    document.write("</pre>");
    console.log(array);
    
}
// things to do: write this function recursively
