var gavin = {
    name: "Gavin of Anywhere",
    race: "human",
    profession: "warrior",
    weapon: {
        type: "sword",
        range: "melee",
        hand: "main hand"
    }
};

for (var field in gavin) {
    document.write(field);
    document.write(": ");
    //document.write(gavin.field);
    document.write(gavin[field]);
    document.write("<br />");
}