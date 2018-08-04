function character(race,profession,weapon) {
    this.race = race;
    this.profession = profession;
    this.weapon = weapon;
}

function weapon(range,hand) {
    this.range = range;
    this.hand = hand;
}


var Gavin = new character("human","warrior",new weapon("melee","main hand"));

function print(text) {
    document.write(text + "<br />");
}

print(Gavin);
print(Gavin.profession);
print(Gavin.weapon);
print(Gavin.weapon.hand);