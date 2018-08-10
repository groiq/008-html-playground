
var stats = ["staerke","geschick","wille","magie","klugheit","konstitution"];
var stats = {
    staerke: 10,
    geschick: 10,
    wille: 10,
    magie: 10,
    klugheit: 10,
    konstitution: 10
};

function val(x) {
    var result;
    if (x) { result = x; }
    else { result = 0;}
    return result;
}

var human = {staerke:1,geschick:1,magie:1,klugheit:1};
var elf = {wille:2,magie:2};
var dwarf = {staerke:1,geschick:1,konstitution:2};

var warrior = {staerke:4,geschick:3,konstitution:3};
var mage = {magie:5,wille:4,klugheit:1};
var rogue = {geschick:4,wille:2,klugheit:4};

var races = [human,elf,dwarf];
var classes = [warrior,mage,rogue];

for (var stat in stats) {
    say(stat);
    
    say(elf[stat]);
    say(stats[stat] + val(elf[stat]));
}

document.write("<table>");

//document.write()

document.write("</table>");