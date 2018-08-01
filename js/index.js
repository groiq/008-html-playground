

for (var i=0; i<11; i++) {
    document.write("document.write(add(");
    for (var j=0; j<(i+1); j++) {
        document.write(j);
        if (j<(i)) {
            document.write(", ");
        }
    }
    document.write(") + '&lt;br /&gt;');<br />");
}

function add() {
    var result = 0;
    for (var i=0;i<arguments.length;i++) {
        result += i;
    }
    return result;
}

document.write(add(0) + '<br />');
document.write(add(0, 1) + '<br />');
document.write(add(0, 1, 2) + '<br />');
document.write(add(0, 1, 2, 3) + '<br />');
document.write(add(0, 1, 2, 3, 4) + '<br />');
document.write(add(0, 1, 2, 3, 4, 5) + '<br />');
document.write(add(0, 1, 2, 3, 4, 5, 6) + '<br />');
document.write(add(0, 1, 2, 3, 4, 5, 6, 7) + '<br />');
document.write(add(0, 1, 2, 3, 4, 5, 6, 7, 8) + '<br />');
document.write(add(0, 1, 2, 3, 4, 5, 6, 7, 8, 9) + '<br />');
document.write(add(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10) + '<br />');