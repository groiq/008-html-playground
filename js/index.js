function say(text) {
    document.write(text);
    document.write("<br />");
}

var obj1 = {
    size: 5,
}

say(obj1.size);

var thing2 = Object.create(obj1);

say(thing2.size);

obj1.size = 4;

say(obj1.size);
say(thing2.size);

/*Output:
5
5
4
4

*/