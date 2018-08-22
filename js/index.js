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
    
   
}