window.onload = function() {
    var result = doSomething();
    document.getElementById("output").innerHTML = result;
    
}



function doSomething() {
    
    var result = "";
    
    // result = "set in function";
    
    function append(result,x) {
        var y;
        try {
            y = x;
        } catch {
            y = "undefined";
        } finally {
            result += "x is " + y + ".<br />";
        }
        return result;
    }
    
    result = append(result,x);
    var x = 5;
    result = append(result,x);
    
    return result;
}

