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
    var newDuration = prompt("Anzeigedauer:");
    if(newDuration > 0 && newDuration < 21) {
        dispDuration = newDuration;
    } else {
        alert("bad input!");
    }
    document.getElementById("dispadur").innerHTML=dispDuration;
}