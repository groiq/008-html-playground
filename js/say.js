function say(text) {
    document.write(text + "<br />");
}


function list(array) {
    //stringify array
    array = JSON.stringify(array,"---",2);
    //write string to page
    document.write("<pre>");
    document.write(array);
    document.write("</pre>");
    // log to console
    //console.log(array);
    
}
