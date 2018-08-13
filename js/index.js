var olds = ["human","elf","dwarf"];

var gw = ["asura","norn"];

var got = ["white walker"];

olds = olds.concat(gw,got);

for (var race in olds) { say(race + ": " + olds[race]);}