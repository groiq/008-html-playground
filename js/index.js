window.onload=function() {
    
    var weapons = ["sword","shield","bow","staff","axe"];
    var usages = ["melee","defensive","ranged","supportive","conditions"];
    
    
    
    document.getElementById("submit").onclick = parseForm;
    
};

function parseForm() {
    document.getElementById("result").innerHTML = document.getElementById("form1").userText.value;
}