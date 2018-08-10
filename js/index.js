
var stats = ["staerke","geschick","wille","magie","klugheit","konstitution"];
var stats = {
    staerke: 0,
    geschick: 1,
    wille: 1,
    magie: 2,
    klugheit: 2,
    konstitution: 0
};

function val(x) {
    var result;
    if (x) { result = x; }
    else { result = 0;}
    return result;
}

var races = {
    none: {},
    human: {staerke:1,geschick:1,magie:1,klugheit:1},
    elf: {wille:2,magie:2},
    dwarf: {staerke:1,geschick:1,konstitution:2}
}

var professions = {
    none: {},
    warrior: {staerke:4,geschick:3,konstitution:3},
    mage: {magie:5,wille:4,klugheit:1},
    rogue: {geschick:4,wille:2,klugheit:4}
}

document.write("<table border='1'>");

document.write("<tr>");
document.write("<td></td>");
for (var race in races) {
    document.write("<th>" + race + "</th>");
}
document.write("</tr>");

for (var profession in professions) {
    document.write("<tr>");
    document.write("<th>" + profession + "</th>");
    for (var race in races) {
        document.write("<td>");
        var total = 0;
        document.write("<ul>");
        for (var stat in stats) {
            document.write("<li>");
            document.write(stat + ": ");
            //document.write(stats[stat]);
            total += (val(professions[profession][stat]*stats[stat]));
            total += (val(races[race][stat]*stats[stat]));
            document.write(10 + val(professions[profession][stat]) + val(races[race][stat]));
            document.write("</li>");
           
        }
        document.write("</ul>");
         document.write("total: " + total);
        document.write("</td>");
    }
    document.write("<th>" + profession + "</th>");
    document.write("</tr>");
}

document.write("<tr>");
document.write("<td></td>");
for (var race in races) {
    document.write("<th>" + race + "</th>");
}
document.write("<td></td>");
document.write("</tr>");

document.write("</table>");

for (var race in races) {
    
}