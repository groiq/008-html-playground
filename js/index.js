var dispDuration = 5;

function showBigImg(img) {
    var img = document.getElementById(img);
    // alert(img.src);
    infoText = function(i) { document.getElementById("imgInfo").innerHTML = i; };
    // var infoText = document.getElementById("imgInfo").innerHTML;
    // alert(infoText);
    // infoText=img.src;
    infoText(img.src);
    // setTimeout(infoText('noInfo'), (5000));
    // function myFunction() { alert('gehts noch??'); };
    // setTimeout(myFunction, 3000);
    function timesUp() {  infoText('&nbsp;'); };
    setTimeout(timesUp, dispDuration*1000);
    //var timesUp = function() {infoText='&nbsp;'};
    //setTimeout(timesUp, (dispDuration * 1000));
}

function displayDuration() {
    var newDuration = prompt("Anzeigedauer:",dispDuration);
    if(newDuration > 0 && newDuration < 21) {
        dispDuration = newDuration;
    } else {
        alert("bad input!");
    }
    document.getElementById("dispadur").innerHTML=dispDuration;
}

function mouseUp(evt) {
    var i = "hello";
    i += "<br />";
    i += evt;
    for (var j in evt) {
        i = i + j + ": " + evt[j] + "<br />";
    }
    document.getElementById("imgInfo").innerHTML = i;
}

document.onmouseup = mouseUp;

//document.body.addEventListener("mouseup", mouseUp(), true);