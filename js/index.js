window.onload=function() {
    
    document.getElementById("submit").onclick = parseForm;
    
};

function parseForm() {
    document.getElementById("result").innerHTML = document.getElementById("form1").userText.value;
}