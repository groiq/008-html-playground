var permutations = [
    function(i) { return (i*2); },
    function(i) { return (i*3); }
]

var i = 1;
for (var permutation in permutations) {
    i = permutations[permutation](i);
}

say(i);