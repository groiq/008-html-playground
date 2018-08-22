window.onload=function() {
    
        
    
    document.getElementById("submit").onclick = parseForm;
    
};

function parseForm() {
    var result="";
    var form = document.getElementById("form1");
    function obligatory(field) {
        if (field.value == "") {
            result = result + "error: " + field.name + ": obligatory<br />";
            field.focus();
        } else {
            result += field.value + "<br/>";
        }
    }
    obligatory(form.Name);
    obligatory(form.location);
    /*if (form.Name.value == "") {
        result += "error: please write a name";
        form.Name.focus();
    }*/
    function checkForm(field) {
        var reference = "1234567890";
        for (var c in field.value) {
            
        }
    }
    result += form.Gewicht.value;
   

    document.getElementById("result").innerHTML = result;
    
}