window.onload=function() {
    
        
    
    document.getElementById("submit").onclick = parseForm;
    
};

function parseForm() {
    var result="";
    var form = document.getElementById("form1");
    result += form.Name;
    result += form.Gewicht;
   

    document.getElementById("result").innerHTML = result;
    
}