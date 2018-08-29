window.onload = function() {
    var output = "set";
    
    // testLocalVars(output);
    
    window.addEventListener("error", fehlerbehandlung);
    // window.addEventListener("load", testLocalVars());
    // testLocalVars();
    nichtDa();
    
    
    // document.getElementById("output").innerHTML = output;
};

function fehlerbehandlung(errorEvent) {
    output = "fehler!";
    output += errorEvent.message + "<br />" + errorEvent.filename;
    document.getElementById("output").innerHTML = output;
    
}

function testLocalVars() {
    alert("here!");
    output = "output set locally";
    document.getElementById("output").innerHTML = output;
}