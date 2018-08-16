var possibleStates = [0,1];
var permutations = {
    byTwo: function(i) { return (i*2); },
    byThree: function(i) {return (i*3); }
};

function performPermutations(data, permutationFlags) {
    for (var permutation in permutationFlags) {
        if (permutationFlags[permutation]) {
            data = permutations[permutation](data);
        }
    }
    return data;
}



var permutationFlags = {
    byTwo: 0,
    byThree: 1
};

var testData = 1;

say(performPermutations(testData,permutationFlags));