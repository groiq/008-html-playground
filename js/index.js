

for (var i=0; i<11; i++) {
    document.write("document.write(add(");
    for (var j=0; j<(i+1); j++) {
        document.write(j);
        if (j<(i)) {
            document.write(", ");
        }
    }
    document.write("));<br />");
}