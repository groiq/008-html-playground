function prod(j,k) {
    var result;
    if (j == 0) { result = k; }
    else if (k == 0) { result = j; }
    else { result = j^k; }
    // result = "rgb(0," + result + ",255)";
    // result += 60;
    result = "hsl(" + result + ", 100%, 50%)";
    return result;
}

var i = 360;

document.write("<table>");

for (var j = 0; j < i; j++) {
    document.write("<tr>");
        for (var k = 0; k < i; k++) {
            // document.write("<td style='background-color:" + prod(j,k) + "'>" + prod(j,k) + "</td>");
            document.write("<td style='background-color:" + prod(j,k) + "'></td>");
        }
    document.write("</tr>");
}

document.write("</table>");