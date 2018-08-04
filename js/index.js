function character(name,race,profession,weapon) {
    this.name = name;
    this.race = race;
    this.profession = profession;
    this.weapon = weapon;
    this.greet = greet;
    this.fight = function() {
        document.write("I wield my " + this.weapon.type + "!");
    }
}

function greet() {
        result = "Hello, my name is " + this.name + ".";
        document.write(result);
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

gavin.greet();
gavin.fight();

/*output:

name: Gavin of Anywhere, not undefined
race: human, not undefined
profession: warrior, not undefined
weapon: [object Object], not undefined
greet: function greet() { result = "Hello, my name is " + this.name + "."; document.write(result); }, not undefined
fight: function() { document.write("I wield my " + this.weapon.type + "!"); }, not undefined
Hello, my name is Gavin of Anywhere.I wield my sword! 
*/