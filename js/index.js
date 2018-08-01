yellMode = "normal";
if (yellMode == "normal") {
    function yell(content) { document.write(content); }
}
else if (yellMode == "obtrusive") {
    function yell(content) { alert(content); }
}
yell("Welt!");

yellMode = "obtrusive";
if (yellMode == "normal") {
    function yell(content) { document.write(content); }
}
else if (yellMode == "obtrusive") {
    function yell(content) { alert(content); }
}
yell("Hallo!");