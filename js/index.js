window.onload=function() {
    
    var weapons = ["sword","shield","bow","staff","axe"];
    var usages = ["melee","defensive","ranged","supportive","conditions"];
    
   for (var i in weapons) {
       var tag = document.createElement("option");
       var tagValue = document.createAttribute("value");
       tagValue.nodeValue = i;
       tag.innerHTML = weapons[i];
       
       document.getElementById("weapons").appendChild(tag);
   }     
        
    
    document.getElementById("submit").onclick = parseForm;
    
};

function parseForm() {
    // document.getElementById("result").innerHTML = document.getElementById("form1").userText.value;
    var result = "You have covered these use cases: ";
    with (document.getElementById("form1").weapons) {
        for (var option in options) {
            result += option;
            result += options[option];
        }
    }
   /* for (var option in document.getElementById("form1").weapons.options) {
        //result += option;
        if (option.selected) {
            result += option;
        }
    }*/
    
    
    document.getElementById("result").innerHTML = result;
    //document.getElementById("form1").weapons.value;
   
}