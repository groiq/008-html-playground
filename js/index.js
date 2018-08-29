window.onload = function() {
    var output = "set";
    
    window.addEventListener("error", fehlerbehandlung);
    
    
    document.getElementById("output").innerHTML = output;
};