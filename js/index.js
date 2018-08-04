var gavin = {
    name: "Gavin of Anywhere",
    race: "human",
    profession: "warrior",
    weapon: {
        type: "sword",
        range: "melee",
        hand: "main hand"
    },
    greet: function() {
    result = "Hello, I'm " + this.name;
    document.write(result);
}
};

for (var field in gavin) {
    document.write(field);
    document.write(": ");
    document.write(gavin[field]);
    document.write(", not ");
    document.write(gavin.field);
    document.write("<br />");
}

gavin.greet();

/*output:
name: Gavin of Anywhere, not undefined
race: human, not undefined
profession: warrior, not undefined
weapon: [object Object], not undefined
greet: function() { result = "Hello, I'm " + this.name; document.write(result); }, not undefined
Hello, I'm Gavin of Anywhere 
*/