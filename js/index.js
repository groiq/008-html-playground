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
        var numbery = true;
            
        for (var c in field.value) {
            if (reference.indexOf(field.value.charAt(c)) == -1) {
                numbery  = false;
               
            } 
        }
        if (numbery == true) {
            result += field.value + "<br />";
        } else {
            result += "error: " + field.name + ": only numbers<br /";
            field.focus();
        }
    }
    checkForm(form.Gewicht);
    checkForm(form.age);
   

    document.getElementById("result").innerHTML = result;
    
}