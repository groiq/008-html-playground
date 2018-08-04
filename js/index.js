function character(race,profession) {
    this.race = race;
    this.profession = profession;
}

var Gavin = new character("human","warrior");

document.write(Gavin);
document.write(Gavin.profession);