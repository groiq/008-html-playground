function prod(j,k) {
    var result;
    if (j == 0) { result = k; }
    else if (k == 0) { result = j; }
    else { result = j*k; }
    result = "rgb(0,0," + result + ")"
    return result;
}

var i = 17;

document.write("<table style='color:#ffff00'>");

for (var j = 0; j < i; j++) {
    document.write("<tr>");
        for (var k = 0; k < i; k++) {
            document.write("<td style='background-color:" + prod(j,k) + "'>" + prod(j,k) + "</td>");
            // document.write("<td style='padding:100em, background-color:" + prod(j,k) + "'>&nbsp;</td>");
        }
    document.write("</tr>");
}

document.write("</table>");