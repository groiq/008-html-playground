function repOne(text,before,after) {
    //say(text + "; " + before + ": " + after);
    var ind = text.indexOf(before);
    while (ind > -1 ) {
        var head = text.slice(0,ind);
        var tail = text.slice((ind+1));
        //say(head);
        //say(tail);
        text = head.concat(after);
        text = text.concat(tail);
        //say(text);
        ind = text.indexOf(before);
        //ind = -1;
    }
    return text;
}

function replace(text) {
    var replacements = {"ä":"ae","ö":"oe","ü":"ue"};
    for (var replacement in replacements) {
        text = repOne(text,replacement,replacements[replacement]);
    }
    return text;
}

var teststr = "1äöü12äöü23äöü3";

say(teststr);
say(replace(teststr));