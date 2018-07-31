function prod(j,k) {
    var result;
    if (j == 0) { result = k; }
    else if (k == 0) { result = j; }
    else { result = j^k; }
    return result;
}

var i = 33;

document.write("<table border='1'>");

for (var j = 0; j < i; j++) {
    document.write("<tr>");
        for (var k = 0; k < i; k++) {
            document.write("<td width ='5'>" + prod(j,k) + "</td>");
        }
    document.write("</tr>");
}

document.write("</table>");