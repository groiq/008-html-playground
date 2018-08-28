var possibleStates = [0,1];

function generateCases(switchArray,possibleStates) {
    var allStates = [];
    var currentStates = [];
    var switchList = Object.keys(switchArray);
    for (var i in switchList) { currentStates.push(possibleStates[0]); }
    
    function fillValues(currentSwitch) {
        for (var currentState in possibleStates) {
            currentStates[currentSwitch] = possibleStates[currentState];
            if(currentSwitch < (switchList.length-1)) {
                fillValues(currentSwitch+1);
            } else {
                var currentStateDict = {};
                for (var i in switchList) {
                    var switchID = switchList[i];
                    currentStateDict[switchID] = currentStates[i];
                }
                allStates.push(currentStateDict);
            }
        }
    }
    fillValues(0);
    return allStates;
}

function performPermutations(data, permutations, permutationFlags) {
    var result = "";
    for (var permutation in permutationFlags) {
        if (permutationFlags[permutation]) {
            result += permutation;
            result += ": ";
            data = permutations[permutation](data);
        }
    }
    result += data; 
    return result;
}

function listAllPermutations(data,permutations) {
    var allCases = generateCases(permutations,possibleStates);
    for (var testCase in allCases) {
        say(performPermutations(data,permutations,allCases[testCase]));
    }
}

var testData = 1;

var multiplications = {
    byTwo: function(i) { return (i*2); },
    byThree: function(i) {return (i*3); },
    byFour: function(i) { return (i*4); }
};

listAllPermutations(testData,multiplications);

var arr = new Array();
arr[1] = "hello";
arr[4] = "world";

var arrPermutations = {
    reverse: function(i) {
        return i.slice().reverse();
    },
    fillGaps: function(i) {
        var j = i.slice();
        for (var k=0; k<j.length; k++) {
            if (!j[k]) { j[k] = 0; }
        }
        return j;
    },
};

listAllPermutations(arr,arrPermutations);
