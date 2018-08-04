function character(name,race,profession,weapon) {
    this.name = name;
    this.race = race;
    this.profession = profession;
    this.weapon = weapon;
}

function weapon(type,range,hand) {
    this.type = type;
    this.range = range;
    this.hand = hand;
}

var gavin = new character("Gavin of Anywhere", "human", "warrior", new weapon("sword","melee","main hand"));

for (var field in gavin) {
    document.write(field);
    document.write(": ");
    document.write(gavin[field]);
    document.write(", not ");
    document.write(gavin.field);
    document.write("<br />");
}
