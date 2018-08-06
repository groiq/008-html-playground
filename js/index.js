var character = {
    race: "asura",
    stats: function() {
        return "The race is " + this.race + " and the profession is " + this.profession + ".";
    }
}

document.write(character.stats());

character.profession = "mesmer";

document.write(character.stats());
