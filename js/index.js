var possibleStates = [0,1];
var permutations = {
    byTwo: function(i) { return (i*2); },
    byThree: function(i) {return (i*3); }
};



for (var permutation in permutations ) {
    say(permutation);
}