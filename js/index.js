var keywords = ["gaps","gapsReversed","filled","filledReversed"];

var arrays = new Array();

for (var kwdIndex in keywords) {
    var keyword = keywords[kwdIndex];
    arrays[keyword] = new Array();
    var arr = arrays[keyword];
    arr[1] = "Hello";
    arr[4] = "World";
    if (keyword.match(/.*filled.*/i)) {
        for (var i=0;i<arr.length;i++) {
            if (!arr[i]) { arr[i] = 0; }
        }
    }
    if (keyword.match(/.*Reverse.*/i)) {
        arr.reverse();
    }
}

list(arrays);
say("");

for (var array in arrays) {
    say(array + ": ");
    list(arrays[array]);
}

/* output:
gaps: ,Hello,,,World
gapsReversed: World,,,Hello,
filled: 0,Hello,0,0,World
filledReversed: World,0,0,Hello,0

gaps:
1: Hello
4: World
gapsReversed:
0: World
3: Hello
filled:
0: 0
1: Hello
2: 0
3: 0
4: World
filledReversed:
0: World
1: 0
2: 0
3: Hello
4: 0
6: !
*/

/*
Things to do: Automate modification by flags:
you have an object (called modifications or something) with entries such as "reverse:" x.reverse()
for every entry in the modifications object you create one array where the modification is done and one where it isn't.
That means that I'll have to write a "generate all possible test cases" script again!
*/